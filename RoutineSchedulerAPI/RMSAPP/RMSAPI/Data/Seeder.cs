using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Data.Entities;

namespace RMSAPI.Data
{
    public class Seeder
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager, RoleManager<AppRole> roleManager)
        {
            if (await userManager.Users.AnyAsync()) return;


            // Adding default roles 
            var roles = new List<AppRole>{
                new AppRole{Name = "Member"},
                new AppRole{Name = "Admin"},
                new AppRole{Name = "Moderator"},
            };
            foreach (var role in roles)
            {
                await roleManager.CreateAsync(role);
            }

            //adding a default admin user
            var admin =
                new AppUser
                {
                    Email = "admintest@rms.com",
                    UserName = "admin",
                    City = "Kolkata",
                    Gender = "Male",

                };
            await userManager.CreateAsync(admin, "Pa$$w0rd");
            await userManager.AddToRoleAsync(admin, "Admin");

            //adding a default member user
            var member =
                new AppUser
                {
                    Email = "Member@rms.com",
                    UserName = "member",
                    City = "Kolkata",
                    Gender = "Male",

                };
            await userManager.CreateAsync(member, "Pa$$w0rd");
            await userManager.AddToRoleAsync(member, "Member");

            //adding a default modaretor user
            var modaretor =
                new AppUser
                {
                    Email = "Moderator@rms.com",
                    UserName = "moderator",
                    City = "Kolkata",
                    Gender = "Male",

                };


            await userManager.CreateAsync(modaretor, "Pa$$w0rd");
            await userManager.AddToRoleAsync(modaretor, "Moderator");

        }
    }
}