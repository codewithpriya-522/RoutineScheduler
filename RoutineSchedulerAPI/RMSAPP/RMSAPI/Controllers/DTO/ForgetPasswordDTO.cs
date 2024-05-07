using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace RMSAPI.Controllers.DTO;

public class ForgetPasswordDTO
{
    /// <summary>
    /// User Id
    /// </summary>
    [DefaultValue("4")]
    public string Id { get; set; }
    /// <summary>
    /// New Password
    /// </summary>
    [DefaultValue("Pa$$w0rd1")]
    public string NewPassword { get; set; }
    /// <summary>
    /// Confirm Password
    /// </summary>
    [DefaultValue("Pa$$w0rd1")]
    [Compare("NewPassword", ErrorMessage = "Confirm password does not match")]
    public string ConfirmPassword { get; set; }
    /// <summary>
    /// Reset Token
    /// </summary>
    public string ResetToken { get; set; }
    /// <summary>
    /// Email
    /// </summary>
    [DataType(DataType.EmailAddress)]
    [DefaultValue("TestUser1@gmail.com")]
    public string Email { get; set; }
    /// <summary>
    /// Username
    /// </summary>
    [DefaultValue("TestUser1")]
    public string UserName { get; set; }
}
