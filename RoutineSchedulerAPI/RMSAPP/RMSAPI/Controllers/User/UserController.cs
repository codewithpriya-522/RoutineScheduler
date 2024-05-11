using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers.User;

public class UserController : BaseAPIController
{
    private readonly IUnitOfWork _unit;
    private readonly IMapper _mapper;
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<AppRole> _roleManager;
    /// <summary>
    /// Initializes a new instance of the <see cref="UserController"/> class.
    /// </summary>
    /// <param name="unit">The unit.</param>
    /// <param name="mapper">The mapper.</param>
    /// <param name="userManager">The user manager.</param>
    /// <param name="roleManager">The role manager.</param>
    public UserController(IUnitOfWork unit, IMapper mapper, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
    {
        _unit = unit;
        _mapper = mapper;
        _userManager = userManager;
        _roleManager = roleManager;
    }
    /// <summary>
    /// Gets the by identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns></returns>
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var entity = await _unit.userRepository.GetById(id);
        if (entity == null)
            return BadRequest("User Not found!");
        UserDTO user = _mapper.Map<UserDTO>(entity);
        user.Roles.AddRange(await _userManager.GetRolesAsync(entity));
        return Ok(user);
    }
    /// <summary>
    /// Gets the by email.
    /// </summary>
    /// <param name="email">The email.</param>
    /// <returns></returns>
    [HttpGet("GetserByEmail")]
    public async Task<IActionResult> GetByEmail(string email)
    {
        if (string.IsNullOrEmpty(email)) return BadRequest("Email is a required field");
        if (!email.IsEmail()) return BadRequest($"{email} is not a valid email");
        var entity = await _userManager.FindByEmailAsync(email);
        if (entity == null)
            return BadRequest("User Not found!");
        UserDTO user = _mapper.Map<UserDTO>(entity);
        user.Roles.AddRange(await _userManager.GetRolesAsync(entity));
        return Ok(user);
    }
    /// <summary>
    /// Gets all.
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var entities = await _unit.userRepository.GetAll();
        if (entities == null) return NoContent();
        return Ok(_mapper.Map<List<UserDTO>>(entities));
    }

    /// <summary>
    /// Creates the specified entity.
    /// </summary>
    /// <param name="entity">The entity.</param>
    /// <returns></returns>
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] UserDTO entity)
    {
        var user = _mapper.Map<AppUser>(entity);
        var existinguser = await _userManager.FindByNameAsync(user.UserName);
        if (existinguser != null) return BadRequest("User already exist with same name");
        await _userManager.CreateAsync(user, Utilities.RandomString(6));
        await _userManager.AddToRolesAsync(user, entity.Roles);
        if (await _unit.Complete()) Ok(user.Id);
        return BadRequest("Failed to add user");
    }
    /// <summary>
    /// Adds the range.
    /// </summary>
    /// <param name="entities">The entities.</param>
    /// <returns></returns>
    [HttpPost("addrange")]
    public IActionResult AddRange([FromBody] IEnumerable<AppUser> entities)
    {
        _unit.userRepository.AddRangeAsync(entities);
        _unit.Complete();
        return CreatedAtAction(nameof(GetAll), null, entities);
    }
    /// <summary>
    /// Removes the specified identifier.
    /// </summary>
    /// <param name="id">The identifier.</param>
    /// <returns></returns>
    [HttpDelete("{id}")]
    public async Task<IActionResult> Remove(int id)
    {
        var entity = await _unit.userRepository.GetById(id);
        if (entity == null)
        {
            return NotFound();
        }
        _unit.userRepository.Remove(entity);
        await _unit.Complete();
        return NoContent();
    }
    /// <summary>
    /// Removes the range.
    /// </summary>
    /// <param name="entities">The entities.</param>
    /// <returns></returns>
    [HttpDelete("removerange")]
    public IActionResult RemoveRange([FromBody] IEnumerable<AppUser> entities)
    {
        _unit.userRepository.RemoveRange(entities);
        _unit.Complete();
        return NoContent();
    }
    /// <summary>
    /// Gets the user in role.
    /// </summary>
    /// <param name="roleName">Name of the role.</param>
    /// <returns></returns>
    [HttpGet("GetUserInRole")]
    public async Task<IActionResult> GetUserInRole(string roleName)
    {
        if (string.IsNullOrEmpty(roleName)) return BadRequest("Rolename is a required field");
        if (roleName.ToLower() == "admin") return BadRequest("Can't pull admin user");
        var user = await _userManager.GetUsersInRoleAsync(roleName);
        if (user.Count >= 0) return BadRequest("No User Found In this role!");
        return Ok(_mapper.Map<List<UserDTO>>(user));
    }
}
