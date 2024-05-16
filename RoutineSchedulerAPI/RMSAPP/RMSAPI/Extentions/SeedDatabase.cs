using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Data.Entities;
using RMSAPI.Data;

namespace RMSAPI.Extentions;

public static class SeedDatabase
{
    public static async Task<WebApplication> SeedStaticData(this WebApplication app)
    {
        using var scope = app.Services.CreateScope();
        var services = scope.ServiceProvider;
        try
        {
            var context = services.GetRequiredService<RMSAPI.Data.DataContext>();
            var userManager = services.GetRequiredService<UserManager<AppUser>>();
            var roleManager = services.GetRequiredService<RoleManager<AppRole>>();

            await context.Database.MigrateAsync();
            //await context.Database.ExecuteSqlRawAsync("DELETE FROM [Connections]");
            await Seeder.SeedUsers(userManager, roleManager, context);
        }
        catch (Exception ex)
        {
            var logger = services.GetService<ILogger<Program>>();
            logger.LogError(ex, "An error occur while seeding data/ Migration");
        }

        return app;
    }
}
