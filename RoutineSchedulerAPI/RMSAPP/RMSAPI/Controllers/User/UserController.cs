using Microsoft.AspNetCore.Mvc;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;
using System.Linq.Expressions;

namespace RMSAPI.Controllers.User
{
    public class UserController : BaseAPIController
    {
        private readonly IUnitOfWork _unit;

        public UserController(IUnitOfWork unit)
        {
            _unit = unit;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var entity = await _unit.userRepository.GetById(id);
            if (entity == null)
            {
                return BadRequest();
            }
            return Ok(entity);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var entities = await _unit.userRepository.GetAll();

            return Ok(entities);
        }

        [HttpGet("search")]
        public async Task<IActionResult> Find([FromBody] Expression<Func<AppUser, bool>> expression)
        {
            var entities = await _unit.userRepository.Find(expression);
            return Ok(entities);
        }

        [HttpPost]
        public async Task<IActionResult> Create ([FromBody] AppUser entity)
        {
            await _unit.userRepository.AddAsync(entity);
           if( await _unit.Complete())  Ok(entity.Id);
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
    }
}
