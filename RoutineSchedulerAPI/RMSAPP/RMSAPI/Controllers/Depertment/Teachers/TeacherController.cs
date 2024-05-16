using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers.Depertment.Teachers;

public class TeacherController: BaseAPIController
{
    public UserManager<AppUser> _userManager { get; }
    public RoleManager<AppRole> _roleManager { get; }

    public TeacherController(IUnitOfWork unit, IMapper mapper, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager) : base(unit, mapper) 
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }

    /// <summary>
    /// Gets the by identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns>Teacher object</returns>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        if (id == 0 || id < 0) return BadRequest("Id is a required field");
        var entity = await _unit.Teacher.Query(dept =>
        dept
        .Include(p => p.AppUser)
        .Include(p => p.TeacherSubjects)
        .ThenInclude(p => p.Subject)
        .Include(p => p.Department)
        .Where(p => p.Id == id));

        if (entity == null)
            return BadRequest("Teacher Data Not found!");

        return Ok(_mapper.Map<TeacherDataDTO>(entity.FirstOrDefault()));
    }
    /// <summary>
    /// Creates the specified dept.
    /// </summary>
    /// <param name="dept">The dept.</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] TeacherDataDTO tech)
    {
        var existstingTeacher = await _unit.Teacher.Query(t =>  t.Where(tec => (tec.AppUser.FirstName == tech.FirstName && tec.AppUser.LastName == tech.LastName && tec.Department.Id == tech.DepertmentID)));
        if (existstingTeacher.Count() > 0) 
            return BadRequest("Same depert ment is already exist");
        string username = Utilities.GenerateUsername(tech.FirstName, tech.LastName);
        // Creaing an app user
        var user = new AppUser
        {
            UserName = username,
            FirstName = tech.FirstName,
            LastName = tech.LastName,
            Email = tech.Email
        };
        await _userManager.CreateAsync(user, "Pa$$w0rd");
        await _userManager.AddToRoleAsync(user, "Teacher");
        var appuser = await _userManager.FindByNameAsync(username);
        // Fetching The depertment
        var depertment = await _unit.Deperment.GetById(tech.DepertmentID);
        
        // Creating the techer 
        var techToInsert = new Teacher
        {
            AppUser = appuser,
            AppUserId = appuser.Id,
            Department = depertment,
            DepartmentId = tech.DepertmentID,
            TeacherSubjects = null
        };

        await _unit.Teacher.AddAsync(techToInsert);
        var insertedTeacher = await _unit.Teacher.Find(p => p.AppUser.UserName == username);
        //Creating te teacher subjects 
        var subjects = new List<TeacherSubjects>();
        foreach (string subject in tech.Subjects)
        {
            var teacherSub = await _unit.Subjects.Find(d => d.Name == subject);
            subjects.Add(new TeacherSubjects
            {
                Subject = teacherSub.FirstOrDefault(),
                SubjectID = teacherSub.FirstOrDefault().Id,
                Teacher = insertedTeacher.FirstOrDefault(),
                TeacherID = insertedTeacher.FirstOrDefault().Id
            });
        }
        var teacherData = insertedTeacher.FirstOrDefault();
        teacherData.TeacherSubjects = subjects;
        _unit.Teacher.UpdateAsync(teacherData);
        await _unit.Complete();
        return Ok("Depertment Added Successfully");
    }
    /// <summary>
    /// All we can update in teacher is depertment and subjects of the teacher
    /// </summary>
    /// <param name="dept">The dept.</param>
    /// <returns>Teacher DTO</returns>
    [HttpPut]
    public async Task<IActionResult> Update([FromBody] TeacherDataDTO teacherData)
    {
        if (teacherData == null) return BadRequest("Teacher object can't be null or empty");
        if (!await IsExistbyId(teacherData.Id)) return BadRequest($"Provided id:{teacherData.Id} is not exist in our record");
        // Fetching teacher deperment 

        var dept = (teacherData.DepertmentID > 0) ?
            await _unit.Deperment.GetById(teacherData.DepertmentID) :
            _unit.Deperment.Find(d => d.Name == teacherData.DepertmentName).Result.FirstOrDefault();

        var teacherToUpdate = await _unit.Teacher.GetById(teacherData.Id);
        teacherToUpdate.DepartmentId = teacherData.DepertmentID;
        teacherToUpdate.Department = dept;

        // Mapping Subjects 
        var subjects = new List<TeacherSubjects>();
        foreach (string subject in teacherData.Subjects)
        {
            var teacherSub = await _unit.Subjects.Find(d => d.Name == subject);
            subjects.Add(new TeacherSubjects
            {
                Subject = teacherSub.FirstOrDefault(),
                SubjectID = teacherSub.FirstOrDefault().Id,
                Teacher = teacherToUpdate,
                TeacherID = teacherToUpdate.Id
            });
        }
        teacherToUpdate.TeacherSubjects = subjects;
        _unit.Teacher.UpdateAsync(teacherToUpdate);
        await _unit.Complete();
        return Ok("Successully updated the Teacher");
    }

    /// <summary>
    /// Removes the specified identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns></returns>
    [HttpDelete("{id}")]
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
    /// Get All Teacher data 
    /// </summary>
    /// <returns>A list of depertment</returns>
    [HttpGet("getall")]
    public async Task<IActionResult> GetAll()
    {
        var entities = await _unit.Teacher.GetAll();
        if (entities == null) return NoContent();
        return Ok(_mapper.Map<List<TeacherDataDTO>>(entities));
    }

    #region Private helper methods    
    /// <summary>
    /// Determines whether [is existby identifier] [the specified identifier].
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns>
    ///   <c>true</c> if [is existby identifier] [the specified identifier]; otherwise, <c>false</c>.
    /// </returns>
    private async Task<bool> IsExistbyId(int id)
    {
        var dept = await _unit.Teacher.Find(d => d.Id == id);

        return dept.Count() > 0 ? true : false;
    }
   
    #endregion  
}
