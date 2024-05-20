using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers.Depertments.Students;

public class StudentController : BaseAPIController
{
    private readonly UserManager<AppUser> _userManager;

    public StudentController(IUnitOfWork unit, IMapper mapper, UserManager<AppUser> userManager) : base(unit, mapper)
    {
        _userManager = userManager;
    }

    /// <summary>
    /// Get a Student by ID.
    /// </summary>
    /// <param name="id">The identifier of the Student.</param>
    /// <returns>student object.</returns>
    /// <response code="200">Returns the student object.</response>
    /// <response code="400">If the ID is invalid.</response>
    /// <response code="404">If the student is not found.</response>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(StudentDataDTO), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetById(int id)
    {
        if (id <= 0)
            return BadRequest("Id is a required field");

        var entity = await _unit.Student.Query(dept =>
            dept.Include(p => p.Batch)
                .ThenInclude(p => p.BatchSubjects)
                .ThenInclude(p => p.Subject)
                .Include(p => p.AppUser)
                .Where(p => p.Id == id));

        if (entity == null)
            return BadRequest("Student Data not found!");

        return Ok(_mapper.Map<StudentDataDTO>(entity.FirstOrDefault()));
    }

    /// <summary>
    /// Create a new student.
    /// </summary>
    /// <param name="student">The student data transfer object.</param>
    /// <returns>The result of the creation.</returns>
    /// <response code="201">If the student is successfully created.</response>
    /// <response code="400">If the student data is invalid.</response>
    [HttpPost]
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Create([FromBody] StudentDataDTO student)
    {
        //if (await IsExist(dept.Name)) return BadRequest("Same student is already exist");

        string username = Utilities.GenerateUsername(student.FirstName, student.LastName);
        if (student == null) return BadRequest("Student data can't be null");

        var appUser = new AppUser()
        {
            FirstName = student.FirstName,
            LastName = student.LastName,
            Email = student.Email,
            UserName = username,
            KnownAs = student.KnownAs,
            LastActive = student.LastActive,
            DateOfBirth = student.DateOfBirth.ToDateOnly("dd/MM/yyyy"),
            Created = DateTime.Now,
            Gender = student.Gender
        };
        // Creating a appuser and adding it to role
        await _userManager.CreateAsync(appUser, "Pa$$w0rd");
        await _userManager.AddToRoleAsync(appUser, "Student");
        // Pulling batch data
        Batch batch = null;
        if (student.BatchId > 0)
            batch = await _unit.Batch.GetById(student.BatchId);
        var userData = await _userManager.FindByNameAsync(username);
        var studentToInsert = new Student()
        {
            AppUser = userData,
            AppUserId = userData.Id,
            Batch = batch,
            BatchId = batch.Id
        };
        await _unit.Student.AddAsync(studentToInsert);
        await _unit.Complete();
        return Ok("student Added Successfully");
    }
    /// <summary>
    /// Update a student.
    /// </summary>
    /// <param name="student">The student data transfer object.</param>
    /// <returns>The result of the update.</returns>
    /// <response code="200">If the student is successfully updated.</response>
    /// <response code="400">If the student data is invalid.</response>
    /// <response code="404">If the student is not found.</response>
    [HttpPut]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Update([FromBody] StudentDTO student)
    {
        if (student == null) return BadRequest("student object can't be null or empty");
        if (!_unit.Student.IsExist(student.Id)) return BadRequest($"Provided id: {student.Id} is not exist in our record");
        var studentData = await _unit.Student.Query(b =>
        b.Include(bs => bs.Batch)
        .ThenInclude(bs => bs.BatchSubjects)
        .Include(bs => bs.AppUser)
        .Include(ps => ps.Batch)
        .ThenInclude(b => b.Department)
        .Where(o => o.Id == student.Id));
        var studentToUpdate = studentData.FirstOrDefault();

        if (studentToUpdate.BatchId != student.BatchId)
        {
            var batch = await _unit.Batch.Query(b =>
            b.Include(i => i.BatchStudents)
            .ThenInclude(i => i.AppUser)
            .Include(i => i.BatchSubjects)
            .Include(i => i.Department)
            .Where(i => i.Id == student.BatchId)
            );

            studentToUpdate.Batch = batch.FirstOrDefault();
            studentToUpdate.BatchId = batch.FirstOrDefault().Id;
            //Batch student mapping 
            if (!batch.FirstOrDefault().BatchStudents.Any(p => p.Id == studentToUpdate.Id))
            {
                batch.FirstOrDefault().BatchStudents.Add(studentToUpdate);
            }
        }
        studentToUpdate.AppUser.Gender = student.Gender;
        studentToUpdate.AppUser.KnownAs = student.KnownAs;
        studentToUpdate.AppUser.FirstName = student.FirstName;
        studentToUpdate.AppUser.LastName = student.LastName;
        studentToUpdate.AppUser.Email = student.Email;
        _unit.Student.UpdateAsync(studentToUpdate);
        await _unit.Complete();
        return Ok("Successully updated the student");
    }

    /// <summary>
    /// Remove a batch by ID.
    /// </summary>
    /// <param name="id">The identifier of the student.</param>
    /// <returns>The result of the removal.</returns>
    /// <response code="204">If the student is successfully removed.</response>
    /// <response code="404">If the student is not found.</response>
    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Remove(int id)
    {
        var entity = await _unit.Student.GetById(id);
        if (entity == null)
        {
            return NotFound();
        }
        _unit.Student.Remove(entity);
        await _unit.Complete();
        return NoContent();
    }
    /// <summary>
    /// Get all studentes.
    /// </summary>
    /// <returns>A list of all studentes.</returns>
    /// <response code="200">Returns the list of studentes.</response>
    /// <response code="204">If no studentes are found.</response>
    [HttpGet("getall")]
    [ProducesResponseType(typeof(List<StudentDTO>), 200)]
    [ProducesResponseType(204)]
    public async Task<IActionResult> GetAll()
    {
        var entities = await _unit.Student.Query(s =>
        s.Include(i => i.AppUser)
        .Include(i => i.Batch));
        if (entities == null) return NoContent();
        return Ok(_mapper.Map<List<StudentDTO>>(entities));
    }
}
