using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;
using System.Linq.Expressions;

namespace RMSAPI.Controllers.User
{
    public class UserController : BaseAPIController
    {
        private readonly IUnitOfWork _unit;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<AppRole> _roleManager;

        public UserController(IUnitOfWork unit, IMapper mapper, UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            _unit = unit;
            _mapper = mapper;
            _userManager = userManager;
            _roleManager = roleManager;
        }

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

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entities = await _unit.userRepository.GetAll();
            if (entities == null) return NoContent();
            return Ok(_mapper.Map<List<UserDTO>>(entities));
        }

        [HttpGet("search")]
        public async Task<IActionResult> Find([FromBody] Expression<Func<AppUser, bool>> expression)
        {
            var entities = await _unit.userRepository.Find(expression);
            return Ok(_mapper.Map<List<UserDTO>>(entities));
        }

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

        [HttpPost("addrange")]
        public IActionResult AddRange([FromBody] IEnumerable<AppUser> entities)
        {
            _unit.userRepository.AddRangeAsync(entities);
            _unit.Complete();
            return CreatedAtAction(nameof(GetAll), null, entities);
        }

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

        [HttpDelete("removerange")]
        public IActionResult RemoveRange([FromBody] IEnumerable<AppUser> entities)
        {
            _unit.userRepository.RemoveRange(entities);
            _unit.Complete();
            return NoContent();
        }
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
}
