using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO;

public class RegisterDTO
{
    /// <summary>
    /// User name of the user ca be a alpha numaricla string 
    /// </summary>
    [Required]
    [DefaultValue("testuser1")]
    public string Username { get; set; }

    /// <summary>
    /// Email is a require field which will be used to send promotional emails and other required emails
    /// </summary>
    [Required]
    [EmailAddress]
    [DefaultValue("TestUser1@gmail.com")]
    public string Email { get; set; }

    /// <summary>
    /// This is a optional field we can nickname a user 
    /// </summary>
    [Required]
    [DefaultValue("TestUser1")]
    public string KnownAs { get; set; }

    /// <summary>
    /// We are not gender biosed so we are using a open to write gender you can identify as a helecopter we give you
    /// the liberty to use that (Male or Female is optional)
    /// </summary>
    [Required]
    [DefaultValue("Male")]
    public string Gender { get; set; }
    /// <summary>
    /// This date string has to be in this dd/mm/yyyy format to work on the backend 
    /// </summary>
    [DefaultValue("07/05/2001")]
    public string DateOfBirth { get; set; }

    /// <summary>
    /// City of the user
    /// </summary>
    [Required]
    [DefaultValue("Panskura")]
    public string City { get; set; }

    /// <summary>
    /// Country of the user
    /// </summary>
    [Required]
    [DefaultValue("India")]
    public string Country { get; set; }

    /// <summary>
    /// Password can be alphanumarical
    /// with a minimum of 4 char and maximum can be 20 character long
    /// </summary>
    [Required]
    [StringLength(20, MinimumLength = 4, ErrorMessage = "Password is not matching the requirements")]
    [DefaultValue("Pa$$w0rd")]
    public string Password { get; set; }
}
