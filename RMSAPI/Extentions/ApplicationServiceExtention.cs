using Microsoft.EntityFrameworkCore;
using RMSAPI.Data;
using RMSAPI.Data.Repository;
using RMSAPI.Interfaces;
using RMSAPI.Services;

namespace RMSAPI.Extentions
{
    public static class ApplicationServiceExtention
    {
        /// <summary>
        /// Applications the services.
        /// </summary>
        /// <param name="services">The services.</param>
        /// <param name="configuration">The configuration.</param>
        /// <returns></returns>
        public static IServiceCollection ApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(configuration.GetConnectionString("DBCS"));
            });
            services.AddScoped<ITokenService, TokenService>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<IDepermentRepository, DepertmentReporitory>();
            services.AddScoped<ITeacherRepository, TeacherRepository>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            return services;
        }
    }
}
