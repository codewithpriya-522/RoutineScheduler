using Microsoft.EntityFrameworkCore;
using RMSAPI.Data;
using RMSAPI.Data.Repository;
using RMSAPI.Interfaces;
using RMSAPI.Services;

namespace RMSAPI.Extentions
{
    public static class ApplicationServiceExtention
    {
        public static IServiceCollection ApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(configuration.GetConnectionString("DBCS"));
            });
            services.AddScoped<ITokenService, TokenService>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserRepository,UserRepository>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return services;
        }
    }
}
