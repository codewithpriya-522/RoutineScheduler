using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;


namespace RMSAPI.Controllers.Authentication
{
    public class AuthController : BaseAPIController
    {

        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        private readonly UserManager<AppUser> userManager;

        /// <summary>
        /// Constructor to Init Datacontext and Token services
        /// </summary>
        /// <param name="context"></param>
        /// <param name="tokenService"></param>
        public AuthController(UserManager<AppUser> userManager, ITokenService tokenService, IMapper mapper)
        {
            this.userManager = userManager;
            _tokenService = tokenService;
            _mapper = mapper;
        }


        [HttpPost("register")] //url: Api/accounts/register
        /// <summary>
        /// Api to Register User Through this Endpoint
        /// </summary>
        /// <param name="userDTO"></param>
        /// <returns>Newly Created Users data</returns>
        public async Task<ActionResult<AppUserDTO>> Register(RegisterDTO userDTO)
        {
            if (await UserExist(userDTO.Username))
                return BadRequest("Username taken");

            var user = _mapper.Map<AppUser>(userDTO);


            user.UserName = userDTO.Username;

            var result = userManager.CreateAsync(user, userDTO.Password);

            if (!result.IsCompletedSuccessfully) return BadRequest(result.Exception.Message);

            var roleResult = await userManager.AddToRoleAsync(user, "Member");

            if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);

            //Returning the newly created user details 
            return new AppUserDTO
            {
                Username = user.UserName,
                Token = await _tokenService.CreateToken(user),
                KnownAs = user.KnownAs,
                Gender = user.Gender
            };
        }

        /// <summary>
        /// ACttion To login into the appp
        /// </summary>
        /// <param name="userDTO"></param>
        /// <returns></returns>
        [HttpPost("login")]
        public async Task<ActionResult<AppUserDTO>> Login(LoginDTO userDTO)
        {
            var user = await userManager.FindByNameAsync(userDTO.Username);

            if (user == null) return Unauthorized("User not found.");

            var result = await userManager.CheckPasswordAsync(user, userDTO.Password);

            if (!result) return Unauthorized("Invalid password.");

            var token = await _tokenService.CreateToken(user);

            return new AppUserDTO
            {
                Username = user.UserName,
                Token = token
            };
        }
        //TODO: Refresh Token Logic See into db 
        //TODO: Change the JWT token time to 30 min and reshroken epiry time to 7 days using refresh token jwt token will be reated
        //TODO: All the auth data should be added in Claims 
        //TODO: Add PoliCIE to ACCESS and add API reuest filtaring
        //TODO: add EXCEPTION middlewere 
        //TODO: all the api keys will be saed in DOTNET user secreat

        private async Task<bool> UserExist(string username)
        {
            return await userManager.Users.AnyAsync(u => u.UserName == username.ToLower());
        }
    }
}
