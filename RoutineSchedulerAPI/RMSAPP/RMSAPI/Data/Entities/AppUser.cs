using Microsoft.AspNetCore.Identity;
using RMSAPI.Data.Enums;

namespace RMSAPI.Data.Entities;

public class AppUser : IdentityUser<int>
{
    /// <summary>
    /// Gets or sets the date of birth.
    /// </summary>
    /// <value>
    /// The date of birth.
    /// </value>
    public DateOnly DateOfBirth { get; set; }
    /// <summary>
    /// Gets or sets the known as.
    /// </summary>
    /// <value>
    /// The known as.
    /// </value>
    public string KnownAs { get; set; }
    /// <summary>
    /// Gets or sets the created.
    /// </summary>
    /// <value>
    /// The created.
    /// </value>
    public DateTime Created { get; set; }
    /// <summary>
    /// Gets or sets the last active.
    /// </summary>
    /// <value>
    /// The last active.
    /// </value>
    public DateTime LastActive { get; set; } = DateTime.UtcNow;
    /// <summary>
    /// Gets or sets the gender.
    /// </summary>
    /// <value>
    /// The gender.
    /// </value>
    public string Gender { get; set; }
    /// <summary>
    /// Gets or sets the introduction.
    /// </summary>
    /// <value>
    /// The introduction.
    /// </value>
    public string Introduction { get; set; }
    /// <summary>
    /// Gets or sets the looking for.
    /// </summary>
    /// <value>
    /// The looking for.
    /// </value>
    public string LookingFor { get; set; }
    /// <summary>
    /// Gets or sets the interests.
    /// </summary>
    /// <value>
    /// The interests.
    /// </value>
    public string Interests { get; set; }
    /// <summary>
    /// Gets or sets the city.
    /// </summary>
    /// <value>
    /// The city.
    /// </value>
    public string City { get; set; }
    /// <summary>
    /// Gets or sets the country.
    /// </summary>
    /// <value>
    /// The country.
    /// </value>
    public string Country { get; set; }
    /// <summary>
    /// Gets or sets the photos.
    /// </summary>
    /// <value>
    /// The photos.
    /// </value>
    public List<Photo> Photos { get; set; }
    /// <summary>
    /// Gets or sets the user roles.
    /// </summary>
    /// <value>
    /// The user roles.
    /// </value>
    public ICollection<AppUserRole> UserRoles { get; set; }
    /// <summary>
    /// The user's first name.
    /// </summary>
    /// <value>John</value>
    public string FirstName { get; set; }

    /// <summary>
    /// The App users last name.
    /// </summary>
    /// <value>Doe</value>
    public string LastName { get; set; }

    /// <summary>
    /// Is User Deleted Or not 
    /// </summary>
    /// <value></value>
    public bool IsDeleted { get; set; } = false;

    /// <summary>
    /// Is User Active Or not 
    /// </summary>
    /// <value></value>
    public bool IsActive { get; set; } = true;

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

    // Preferences
    /// <summary>
    /// (Optional) The user's preferred language for the application interface.
    /// </summary>
    public string PreferredLanguage { get; set; }

    /// <summary>
    /// A flag indicating whether the user wants to receive notifications.
    /// </summary>
    public bool NotificationsEnabled { get; set; } = true;

    // Advanced Preferences 
    /// <summary>
    /// (Optional) The user's preferred theme for the application interface (e.g., light, dark).
    /// </summary>
    public Theme Theme { get; set; }

    /// <summary>
    /// (Optional) A complex object or string storing the user's preferences for content filtering or display.
    /// </summary>
    public string ContentPreferences { get; set; }


    /// <summary>
    ///  A temporary token used for password reset functionality.
    /// </summary>
    public string PasswordResetToken { get; set; }

    /// <summary>
    /// (Optional) The IP address of the user's last login attempt (for security monitoring).
    /// </summary>
    public string LastLoginIp { get; set; }

    /// <summary>
    /// Refresh Token Of the user
    /// </summary>
    public string RefreshToken { get; set; }

    /// <summary>
    /// Refresh Token Expiry Time Of the user
    /// </summary>
    public DateTime RefreshTokenExpiryTime { get; set; }

    /// <summary>
    /// This will determinate which type of user is this teacher student admin or soemthign else
    /// </summary>
    public UserType Type { get; set; }

}
