using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers.Depertments.Batches;

public class BatchController : BaseAPIController
{
    // Todo: Chnage the Update and insert logic to optimise them
    public BatchController(IUnitOfWork unit, IMapper mapper) : base(unit, mapper) {}

    /// <summary>
    /// Get a batch by ID.
    /// </summary>
    /// <param name="id">The identifier of the batch.</param>
    /// <returns>Batch object.</returns>
    /// <response code="200">Returns the batch object.</response>
    /// <response code="400">If the ID is invalid.</response>
    /// <response code="404">If the batch is not found.</response>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(BatchDataDTO), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetById(int id)
    {
        if (id <= 0)
            return BadRequest("Id is a required field");

        var entity = await _unit.Batch.Query(dept =>
            dept.Include(p => p.BatchStudents)
                .ThenInclude(p => p.AppUser)
                .Include(p => p.BatchSubjects)
                .ThenInclude(p => p.Subject)
                .Where(p => p.Id == id));

        if (entity == null)
            return BadRequest("Batch not found!");

        return Ok(_mapper.Map<BatchDataDTO>(entity.FirstOrDefault()));
    }

    /// <summary>
    /// Create a new batch.
    /// </summary>
    /// <param name="batch">The batch data transfer object.</param>
    /// <returns>The result of the creation.</returns>
    /// <response code="201">If the batch is successfully created.</response>
    /// <response code="400">If the batch data is invalid.</response>
    [HttpPost]
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Create([FromBody] BatchDataDTO dept)
    {
        if (await IsExist(dept.Name)) return BadRequest("Same batch is already exist");
        var deptToInsert = _mapper.Map<Batch>(dept);

        await _unit.Batch.AddAsync(deptToInsert);
        await _unit.Complete();
        return Ok("Batch Added Successfully");
    }
    /// <summary>
    /// Update a batch.
    /// </summary>
    /// <param name="batch">The batch data transfer object.</param>
    /// <returns>The result of the update.</returns>
    /// <response code="200">If the batch is successfully updated.</response>
    /// <response code="400">If the batch data is invalid.</response>
    /// <response code="404">If the batch is not found.</response>
    [HttpPut]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Update([FromBody] BatchDataDTO batch)
    {
        if (batch == null) return BadRequest("Batch object can't be null or empty");
        if (!await IsExistbyId(batch.Id)) return BadRequest($"Provided id: {batch.Id} is not exist in our record");
        var batchData = await _unit.Batch.Query(b=> 
        b.Include(bs=> bs.BatchStudents)
        .ThenInclude(bs=> bs.AppUser)
        .Include(bs => bs.BatchStudents)
        .ThenInclude(bs => bs.Batch)
        .Include(ps=> ps.BatchSubjects)
        .Where(o=> o.Id == batch.Id));
        var batchToUpdate = _mapper.Map(batch, batchData.FirstOrDefault());
        //Pulling Deperment Data
        var dept = await _unit.Deperment.GetById(batch.DepartmentId);
        if (dept == null) return BadRequest($"No Depertment found in this id {batch.DepartmentId}");
        batchToUpdate.Department = dept;
        //Subject Mapping
        foreach (string subject in batch.BatchSubjects)
        {
            var sub = await _unit.Subjects.Find(p => p.Name == subject);
            if (sub.Count() < 1)
                return BadRequest($"The Subject with name {subject} is not exist in the db");
            if (!await _unit.Batch.IsSubjectInBatchExist(subject, batch.Id))
            {
                batchToUpdate.BatchSubjects.Add(new BatchSubjects
                {
                    BatchId = batch.Id,
                    Batch = batchToUpdate,
                    Subject = sub.FirstOrDefault(),
                    SubjectId = sub.FirstOrDefault().Id
                });
            }
        }
        //Subject Student Map
        foreach (int studentId in batch.BatchStudentIds)
        {
            if (!await _unit.Batch.IsBatchStudent(batch.Id, studentId))
            {
                var appuser = await _unit.User.GetById(studentId);
                batchToUpdate.BatchStudents.Add(new Student
                {
                    AppUser = appuser,
                    AppUserId = appuser.Id,
                    Batch = batchToUpdate,
                    BatchId = batchToUpdate.Id
                });
            }
        }
        _unit.Batch.UpdateAsync(batchToUpdate);
        await _unit.Complete();
        return Ok(batchToUpdate);
    }

    /// <summary>
    /// Remove a batch by ID.
    /// </summary>
    /// <param name="id">The identifier of the batch.</param>
    /// <returns>The result of the removal.</returns>
    /// <response code="204">If the batch is successfully removed.</response>
    /// <response code="404">If the batch is not found.</response>
    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Remove(int id)
    {
        var entity = await _unit.Batch.GetById(id);
        if (entity == null)
        {
            return NotFound();
        }
        _unit.Batch.Remove(entity);
        await _unit.Complete();
        return NoContent();
    }
    /// <summary>
    /// Get all batches.
    /// </summary>
    /// <returns>A list of all batches.</returns>
    /// <response code="200">Returns the list of batches.</response>
    /// <response code="204">If no batches are found.</response>
    [HttpGet("getall")]
    [ProducesResponseType(typeof(List<BatchDataDTO>), 200)]
    [ProducesResponseType(204)]
    public async Task<IActionResult> GetAll()
    {
        var entities = await _unit.Batch.GetAllAsync();
        if (entities == null) return NoContent();
        return Ok(_mapper.Map<List<BatchDataDTO>>(entities));
    }

    #region Private helper methods    
    /// <summary>
    /// Determines whether the specified name is exist.
    /// </summary>
    /// <param name="name">The name.</param>
    /// <returns>
    ///   <c>true</c> if the specified name is exist; otherwise, <c>false</c>.
    /// </returns>
    private async Task<bool> IsExist(string name)
    {
        var dept = await _unit.Batch.Find(d => d.Name == name);

        return dept.Count() > 0 ? true : false;
    }
    /// <summary>
    /// Determines whether [is existby identifier] [the specified identifier].
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns>
    ///   <c>true</c> if [is existby identifier] [the specified identifier]; otherwise, <c>false</c>.
    /// </returns>
    private async Task<bool> IsExistbyId(int id)
    {
        var dept = await _unit.Batch.Find(d => d.Id == id);

        return dept.Count() > 0 ? true : false;
    }
    #endregion  
}
