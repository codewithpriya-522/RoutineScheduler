
﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO;


public class UserDTO
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    public int Id { get; set; }
    /// <summary>
    /// Gets or sets the date of birth.
    /// </summary>
    /// <value>
    /// The date of birth.
    /// </value>
    public string DateOfBirth { get; set; }
    /// <summary>
    /// Gets or sets the known as.
    /// </summary>
    /// <value>
    /// The known as.
    /// </value>
    public string KnownAs { get; set; }
    /// <summary>
    /// Gets or sets the name of the user.
    /// </summary>
    /// <value>
    /// The name of the user.
    /// </value>
    [Required]
    [DefaultValue("testuser1")]
    public string UserName { get; set; }
    /// <summary>
    /// Gets or sets the email.
    /// </summary>
    /// <value>
    /// The email.
    /// </value>
    [Required]
    [DataType(DataType.EmailAddress)]
    [DefaultValue("testuser1@gmail.com")]
    public string Email { get; set; }
    /// <summary>
    /// Gets or sets the created.
    /// </summary>
    /// <value>
    /// The created.
    /// </value>
    public DateTime Created { get; set; } = DateTime.UtcNow;
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
    /// Gets or sets the roles.
    /// </summary>
    /// <value>
    /// The roles.
    /// </value>
    public List<string> Roles { get; set; }

    /// <summary>
    /// Gets or sets the first name.
    /// </summary>
    /// <value>
    /// The first name.
    /// </value>
    [DefaultValue("FirstName")]
    public string FirstName { get; set; }

    /// <summary>
    /// The App users last name.
    /// </summary>
    /// <value>
    /// Doe
    /// </value>
    [DefaultValue("LastName")]
    public string LastName { get; set; }

    /// <summary>
    /// Is User Active Or not 
    /// </summary>
    /// <value>True/False</value>
    public bool IsActive { get; set; } = true;

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
