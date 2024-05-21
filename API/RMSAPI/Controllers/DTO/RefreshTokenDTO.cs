using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO;


/// <summary>
/// RefreshToken data Transfar object
/// </summary>
public class RefreshTokenDTO
{
    /// <summary>
    /// User Name
    /// </summary>
    [Required]
    [DefaultValue("testuser1")]
    public string UserName { get; set; }

    /// <summary>
    /// Refresh Token
    /// </summary>
    [Required]
    [DefaultValue("")]
    public string RefreshToken { get; set; }
}
