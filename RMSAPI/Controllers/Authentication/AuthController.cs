using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;


namespace RMSAPI.Controllers.Authentication;

public class AuthController : BaseAPIController
{

    private readonly UserManager<AppUser> _userManager;
    private readonly ITokenService _tokenService;
    private readonly RoleManager<AppRole> _roleManager;


    /// <summary>
    /// Constructor to handle all the data initialization
    /// </summary>
    /// <param name="userManager"></param>
    /// <param name="tokenService"></param>
    /// <param name="mapper"></param>
    /// <param name="roleManager"></param>
    /// <param name="signInManager"></param>
    public AuthController(UserManager<AppUser> userManager, ITokenService tokenService,
     RoleManager<AppRole> roleManager, IUnitOfWork unit, IMapper mapper) :base (unit,mapper)
    {
        _roleManager = roleManager;
        _userManager = userManager;
        _tokenService = tokenService;
     
    }
    /// <summary>
    /// Api endpoint to register a new user into the system
    /// </summary>
    /// <param name="register"></param>
    /// <returns></returns>
    [HttpPost("register")]
    public async Task<ActionResult<AppUserDTO>> Register(RegisterDTO register)
    {
        if (await UserExist(register.Username)) return BadRequest("Username Taken");

        var user = _mapper.Map<AppUser>(register);

        var result = _userManager.CreateAsync(user, register.Password);

        if (!result.IsCompletedSuccessfully) return BadRequest(result.Exception.Message);

        var roleResult = await _userManager.AddToRoleAsync(user, "Member");

        if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);

        var userDTO = new AppUserDTO
        {
            Email = user.Email,
            UserName = user.UserName,
            JWTToken = await _tokenService.CreateToken(user),
            RefreshToken = await _tokenService.CreateRefreshToken(user),
            RefreshTokenExpires = DateTime.Now.AddDays(7)
        };

        //Saving refresg token 
        await SaveRefreshToken(_userManager, userDTO.RefreshToken, userDTO.UserName, userDTO.RefreshTokenExpires);
        return userDTO;
    }

    /// <summary>
    /// Regenerate user tokens for auth user
    /// </summary>
    /// <param name="refresh"></param>
    /// <returns> UserDataDTO</returns>
    [HttpPost("refresh")]
    public async Task<ActionResult<AppUserDTO>> Refresh(RefreshTokenDTO refresh)
    {
        if (string.IsNullOrEmpty(refresh.RefreshToken) || string.IsNullOrEmpty(refresh.UserName)) return BadRequest("Invalid Request");
        var result = await ValidateRefreshToken(refresh.RefreshToken, refresh.UserName);
        if (!result) return BadRequest("Invalid Refresh Token");
        var user = await _userManager.FindByNameAsync(refresh.UserName);
        var userDTO = new AppUserDTO
        {
            Email = user.Email,
            UserName = user.UserName,
            JWTToken = await _tokenService.CreateToken(user),
            RefreshToken = await _tokenService.CreateRefreshToken(user),
            RefreshTokenExpires = DateTime.Now.AddDays(7)
        };

        await SaveRefreshToken(_userManager, userDTO.RefreshToken, refresh.UserName, userDTO.RefreshTokenExpires);

        return userDTO;
    }

    /// <summary>
    /// Api endpoint to login into the system
    /// </summary>
    /// <param name="login"></param>
    /// <returns>User Data</returns>
    [HttpPost("login")]
    public async Task<ActionResult<AppUserDTO>> Login(LoginDTO login)
    {
        var user = await _userManager.Users
        .SingleOrDefaultAsync(u => u.UserName.ToLower() == login.Username.ToLower());

        if (user == null) return Unauthorized();
        var result = await _userManager.CheckPasswordAsync(user, login.Password);

        if (!result) return Unauthorized("Invalid Password");

        var userDTO = new AppUserDTO
        {
            UserName = user.UserName,
            Email = user.Email,
            JWTToken = await _tokenService.CreateToken(user),
            RefreshToken = await _tokenService.CreateRefreshToken(user),
            RefreshTokenExpires = DateTime.Now.AddDays(7)
        };

        await SaveRefreshToken(_userManager, userDTO.RefreshToken, user.UserName, userDTO.RefreshTokenExpires);
        return userDTO;
    }

    private static async Task SaveRefreshToken(UserManager<AppUser> userManager, string refreshToken, string userName, DateTime expiresAt)
    {
        var users = await userManager.FindByNameAsync(userName);
        if (users == null) return;
        users.RefreshToken = refreshToken;
        users.RefreshTokenExpiryTime = expiresAt;
        await userManager.UpdateAsync(users);
    }

    /// <summary>
    /// Action to rest password of a user  
    /// </summary>
    /// <param name="model"></param>
    /// <returns>User DTO</returns>
    [HttpPost("forgetPassword")]
    public async Task<ActionResult<UserDTO>> ForgetPassword(ForgetPasswordDTO model)
    {
        //Getting the user 
        var user = getUserForPasswordrReset(model);
        if (user != null)
        {
            IdentityResult passwordChangeResult = await _userManager.ResetPasswordAsync(user, model.ResetToken, model.NewPassword);
            if (passwordChangeResult.Succeeded) return Ok(_mapper.Map<UserDTO>(user));
            if (passwordChangeResult.Errors.Any()) return BadRequest(passwordChangeResult.Errors);
        }
        return null;

    }

    /// <summary>
    /// Generate Password reset token
    /// </summary>
    /// <param name="model"></param>
    /// <returns>Forget Password reset token</returns>
    [HttpPost("generateResetToken")]
    public async Task<ActionResult<ForgetPasswordDTO>> GenerateResetToken(ForgetPasswordDTO model)
    {
        //Getting the user 
        var user = getUserForPasswordrReset(model);
        if (user != null)
        {
            model.ResetToken = await _userManager.GeneratePasswordResetTokenAsync(user);
        }
        //Now sending the model for demo Mail service will be added later
        return Ok(model);
    }

    /// <summary>
    /// Get user for Forgot password reset
    /// </summary>
    /// <param name="model"></param>
    /// <returns>AppUser object if user exists else null</returns>
    private AppUser getUserForPasswordrReset(ForgetPasswordDTO model)
    {
        if (model.Id.IsNotNull())
        {
            return _userManager.FindByIdAsync(model.Id).Result;
        }
        else if (model.Email.IsEmail() && model.Email.IsNotNull())
        {
            return _userManager.FindByEmailAsync(model.Email).Result;
        }
        else if (model.UserName.IsNotNull())
        {
            return _userManager.FindByNameAsync(model.UserName).Result;
        }
        return null;
    }

    /// <summary>
    /// Method To check is user exist in DB 
    /// </summary>
    /// <param name="username"></param>
    /// <returns>True/False</returns>
    private async Task<bool> UserExist(string username)
    {
        return await _userManager.Users.AnyAsync(u => u.UserName == username.ToLower());
    }

    /// <summary>
    /// Check refresh Token Of the user
    /// </summary>
    /// <param name="RefreshToken"></param>
    /// <param name="Username"></param>
    /// <returns>Return True/False</returns>
    private async Task<bool> ValidateRefreshToken(string RefreshToken, string Username)
    {
        var user = await _userManager.Users
        .Where(u => u.UserName == Username)
        .SingleOrDefaultAsync();

        if (user == null) return false;

        user.RefreshToken.Equals(RefreshToken);

        if (user.RefreshTokenExpiryTime < DateTime.Now) return false;

        return true;
    }
}
