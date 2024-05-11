using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Interfaces;
using RMSAPI.Data.Entities;

namespace RMSAPI.Controllers.Depertments;

public class DepertmentController : BaseAPIController
{
    private readonly IUnitOfWork _unit;
    private readonly IMapper _mapper;
    /// <summary>
    /// Initializes a new instance of the <see cref="DepertmentController"/> class.
    /// </summary>
    /// <param name="unit">The unit.</param>
    /// <param name="mapper">The mapper.</param>
    public DepertmentController(IUnitOfWork unit, IMapper mapper)
    {
        _unit = unit;
        _mapper = mapper;
    }
    /// <summary>
    /// Gets the by identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        if (id == 0 || id < 0) return BadRequest("Id is a required field");
        var entity = await _unit.depermentRepository.Query(dept =>
        dept
        .Include(p => p.Teachers)
        .Include(p => p.Batches)
        .ThenInclude(p => p.BatchSubjects)
        .Include(p => p.Batches)
        .ThenInclude(p => p.BatchStudents)
        .Where(p => p.Id == id));

        if (entity == null)
            return BadRequest("Depertment Not found!");

        return Ok(_mapper.Map<DepertmentDataDTO>(entity.FirstOrDefault()));
    }
    /// <summary>
    /// Creates the specified dept.
    /// </summary>
    /// <param name="dept">The dept.</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] DepertmentDTO dept)
    {
        if (await IsExist(dept.Name)) return BadRequest("Same depert ment is already exist");
        var deptToInsert = _mapper.Map<Depertment>(dept);

        await _unit.depermentRepository.AddAsync(deptToInsert);
        return Ok("Depertment Added Successfully");
    }
    /// <summary>
    /// Updates the specified dept.
    /// </summary>
    /// <param name="dept">The dept.</param>
    /// <returns></returns>
    [HttpPut]
    public async Task<IActionResult> Update([FromBody] DepertmentDTO dept)
    {
        if (dept == null) return BadRequest("Depertment object can't be null or empty");
        if (!await IsExistbyId(dept.Id)) return BadRequest($"Provided id:{dept.Id} is not exist in our record");
        var deptToUpdate = _mapper.Map<Depertment>(dept);
        _unit.depermentRepository.UpdateAsync(deptToUpdate);
        return Ok("Successully updated the Depertment");
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
        var dept = await _unit.depermentRepository.Find(d => d.Name == name);

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
        var dept = await _unit.depermentRepository.Find(d => d.Id == id);

        return dept.Count() > 0 ? true : false;
    }
    #endregion  
}
