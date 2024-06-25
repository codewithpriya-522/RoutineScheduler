namespace RMSAPI.Controllers.DTO;

public class AppUserDTO
{
    public int Id { get; set; }
    /// <summary>
    /// PhotoUrl of the user 
    /// </summary>
    public string PhotoUrl { get; set; }

    /// <summary>
    /// If there is a nickname for the user
    /// </summary>
    public string KnownAs { get; set; }

    /// <summary>
    /// Gender of the email 
    /// </summary>
    public string Gender { get; set; }

    /// <summary>
    /// Username of the user
    /// </summary>
    /// <value>SampleUsername</value>
    public string UserName { get; set; }

    /// <summary>
    /// Token of the user
    /// </summary>
    /// <value>SampleJwtToken</value>
    public string JWTToken { get; set; }

    /// <summary>
    /// Refresh token of the user
    /// </summary>
    /// <value>Some RandomlyGenerated hashed string</value>
    public string RefreshToken { get; set; }

    /// <summary>
    /// Refresh token expiry date
    /// </summary>
    /// <value>Token expiry date</value>
    public DateTime RefreshTokenExpires { get; set; }

    /// <summary>
    /// Email of the user
    /// </summary>
    /// <value>SampleEmail</value>
    public string Email { get; set; }
    /// <summary>
    /// Role of the user
    /// </summary>
    public string Role { get; set; }
}
