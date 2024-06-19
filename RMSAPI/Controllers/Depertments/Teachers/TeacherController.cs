using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers.Departments.Teachers;


public class TeacherController : BaseAPIController
{
    public UserManager<AppUser> _userManager { get; }
    public RoleManager<AppRole> _roleManager { get; }

    public TeacherController(IUnitOfWork unit, IMapper mapper, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        : base(unit, mapper)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }

    /// <summary>
    /// Get a teacher by ID.
    /// </summary>
    /// <param name="id">The identifier of the teacher.</param>
    /// <returns>Teacher object.</returns>
    /// <response code="200">Returns the teacher object.</response>
    /// <response code="400">If the ID is invalid.</response>
    /// <response code="404">If the teacher is not found.</response>
    [HttpGet("{id}")]
    [ProducesResponseType(typeof(TeacherDataDTO), 200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetById(int id)
    {
        if (id <= 0)
            return BadRequest("Id is a required field");

        var entity = await _unit.Teacher.Query(dept =>
            dept.Include(p => p.AppUser)
                .Include(p => p.TeacherSubjects)
                .ThenInclude(p => p.Subject)
                .Include(p => p.Department)
                .Where(p => p.Id == id));

        if (entity == null)
            return NotFound("Teacher Data Not found!");

        return Ok(_mapper.Map<TeacherDataDTO>(entity.FirstOrDefault()));
    }

    /// <summary>
    /// Create a new teacher.
    /// </summary>
    /// <param name="teacher">The teacher data transfer object.</param>
    /// <returns>The result of the creation.</returns>
    /// <response code="201">If the teacher is successfully created.</response>
    /// <response code="400">If the teacher data is invalid.</response>
    [HttpPost]
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    public async Task<IActionResult> Create([FromBody] TeacherDataDTO teacher)
    {
        var existingTeacher = await _unit.Teacher.Query(t =>
            t.Where(tec => (tec.AppUser.FirstName == teacher.FirstName &&
                            tec.AppUser.LastName == teacher.LastName &&
                            tec.Department.Id == teacher.DepertmentID)));

        if (existingTeacher.Any())
            return BadRequest("Same department already exists");

        string username = Utilities.GenerateUsername(teacher.FirstName, teacher.LastName);

        var user = new AppUser
        {
            UserName = username,
            FirstName = teacher.FirstName,
            LastName = teacher.LastName,
            Email = teacher.Email
        };

        await _userManager.CreateAsync(user, "Pa$$w0rd");
        await _userManager.AddToRoleAsync(user, "Teacher");

        var appUser = await _userManager.FindByNameAsync(username);

        var department = await _unit.Deperment.GetById(teacher.DepertmentID);

        var teacherToInsert = new Teacher
        {
            AppUser = appUser,
            AppUserId = appUser.Id,
            Department = department,
            DepartmentId = teacher.DepertmentID
        };

        await _unit.Teacher.AddAsync(teacherToInsert);
        await _unit.Complete();

        var insertedTeacher = _unit.Teacher.Find(p => p.AppUser.UserName == username).Result.FirstOrDefault();

        var subjects = new List<TeacherSubjects>();
        foreach (string subject in teacher.Subjects)
        {
            var teacherSub = _unit.Subjects.Find(d => d.Name == subject).Result.FirstOrDefault();
            subjects.Add(new TeacherSubjects
            {
                Subject = teacherSub,
                SubjectID = teacherSub.Id,
                Teacher = insertedTeacher,
                TeacherID = insertedTeacher.Id
            });
        }

        insertedTeacher.TeacherSubjects = subjects;
        _unit.Teacher.UpdateAsync(insertedTeacher);
        await _unit.Complete();

        return Ok(insertedTeacher);
    }

    /// <summary>
    /// Update a teacher's department and subjects.
    /// </summary>
    /// <param name="teacherData">The teacher update data transfer object.</param>
    /// <returns>The result of the update.</returns>
    /// <response code="200">If the teacher is successfully updated.</response>
    /// <response code="400">If the teacher data is invalid.</response>
    /// <response code="404">If the teacher is not found.</response>
    [HttpPut]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Update([FromBody] TeacherUpdateDataDTO teacherData)
    {
        if (teacherData == null)
            return BadRequest("Teacher object can't be null or empty");

        if (!await IsExistbyId(teacherData.Id))
            return NotFound($"Provided id:{teacherData.Id} is not exist in our record");

        if (teacherData.DepertmentID <= 0)
            return BadRequest("No associated department with this id");

        var dept = await _unit.Deperment.GetById(teacherData.DepertmentID);

        var teacherToUpdate = await _unit.Teacher.GetById(teacherData.Id);
        teacherToUpdate.DepartmentId = teacherData.DepertmentID;
        teacherToUpdate.Department = dept;

        var subjects = new List<TeacherSubjects>();
        foreach (string subject in teacherData.Subjects)
        {
            var teacherSub = _unit.Subjects.Find(d => d.Name == subject).Result.FirstOrDefault();
            subjects.Add(new TeacherSubjects
            {
                Subject = teacherSub,
                SubjectID = teacherSub.Id,
                Teacher = teacherToUpdate,
                TeacherID = teacherToUpdate.Id
            });
        }

        teacherToUpdate.TeacherSubjects = subjects;
        _unit.Teacher.UpdateAsync(teacherToUpdate);
        await _unit.Complete();

        return Ok("Successfully updated the Teacher");
    }

    /// <summary>
    /// Remove a teacher by ID.
    /// </summary>
    /// <param name="id">The identifier of the teacher.</param>
    /// <returns>The result of the removal.</returns>
    /// <response code="204">If the teacher is successfully removed.</response>
    /// <response code="404">If the teacher is not found.</response>
    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> Remove(int id)
    {
        var entity = await _unit.Teacher.GetById(id);
        if (entity == null)
        {
            return NotFound();
        }

        _unit.Teacher.Remove(entity);
        await _unit.Complete();

        return NoContent();
    }

    /// <summary>
    /// Get all teachers.
    /// </summary>
    /// <returns>A list of all teachers.</returns>
    /// <response code="200">Returns the list of teachers.</response>
    /// <response code="204">If no teachers are found.</response>
    [HttpGet("getall")]
    [ProducesResponseType(typeof(List<TeacherDataDTO>), 200)]
    [ProducesResponseType(204)]
    public async Task<IActionResult> GetAll()
    {
        var entities = await _unit.Teacher.GetAllAsync();
        if (entities == null || !entities.Any())
        {
            return NoContent();
        }

        return Ok(_mapper.Map<List<TeacherDataDTO>>(entities));
    }

    #region Private helper methods    

    /// <summary>
    /// Determines whether a teacher exists by ID.
    /// </summary>
    /// <param name="id">The identifier of the teacher.</param>
    /// <returns>
    ///   <c>true</c> if the teacher exists; otherwise, <c>false</c>.
    /// </returns>
    private async Task<bool> IsExistbyId(int id)
    {
        var dept = await _unit.Teacher.Find(d => d.Id == id);
        return dept.Any();
    }

    #endregion  
}
