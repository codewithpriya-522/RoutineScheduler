namespace RMSAPI.Controllers.DTO;

public class UserDTO
{
    public int Id { get; set; }
    public DateOnly DateOfBirth { get; set; }
    public string KnownAs { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    public string Gender { get; set; }
    public List<string> Roles { get; set; }

    public string FirstName { get; set; }

    /// <summary>
    /// The App users last name.
    /// </summary>
    /// <value>Doe</value>
    public string LastName { get; set; }

    /// <summary>
    /// Is User Active Or not 
    /// </summary>
    /// <value></value>
    public bool IsActive { get; set; }

    /// <summary>
    /// The user's photo URL.
    /// </summary>
    /// <value>https://www.example.com/profile-photo.jpg</value>
    public string PhotoUrl { get; set; } = string.Empty;


    /// <summary>
    /// (Optional) The user's website URL.
    /// </summary>
    public string Website { get; set; }

    /// <summary>
    /// (Optional) The user's location (city, country). Consider privacy implications before storing.
    /// </summary>
    public string Location { get; set; }

    /// <summary>
    /// (Optional) A short biography of the user.
    /// </summary>
    public string Bio { get; set; }

    /// <summary>
    /// (Optional) The user's preferred language for the application interface.
    /// </summary>
    public string PreferredLanguage { get; set; }

    /// <summary>
    /// A flag indicating whether the user wants to receive notifications.
    /// </summary>
    public bool NotificationsEnabled { get; set; } = true;

}
