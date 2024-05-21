using RMSAPI.Middleware;

namespace RMSAPI.Extentions;

public static class WebApplicationExtension
{
    public static WebApplication BuildRMS(this WebApplication app)
    {

        app.UseMiddleware<ExceptionMiddleware>();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        //app.MapGroup("/api/auth").MapIdentityApi<AppUser>();
        app.UseHttpsRedirection();
        
        app.UseCors();

        app.UseAuthorization();

        app.MapControllers();

        return app;
    }
}
