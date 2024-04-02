using Microsoft.AspNetCore.Identity;

namespace RMSAPI.Data.Entities
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
