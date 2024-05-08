using Microsoft.AspNetCore.Identity;
using static RMSAPI.Data.Enums.Themes;

namespace RMSAPI.Data.Entities
{
    public class AppUser : IdentityUser<int>
    {
        public DateOnly DateOfBirth { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; } = DateTime.UtcNow;
        public DateTime LastActive { get; set; } = DateTime.UtcNow;
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public List<Photo> Photos { get; set; }
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
    }
}
