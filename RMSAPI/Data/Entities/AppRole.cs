using Microsoft.AspNetCore.Identity;

namespace RMSAPI.Data.Entities;

public class AppRole : IdentityRole<int>
{
    /// <summary>
    /// Gets or sets the user roles.
    /// </summary>
    /// <value>
    /// The user roles.
    /// </value>
    public ICollection<AppUserRole> UserRoles { get; set; }
}
