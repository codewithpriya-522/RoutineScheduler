using RMSAPI.Controllers.DTO;
using System.Net;
using System.Text.Json;

namespace RMSAPI.Middleware;

/// <summary>
/// Initializes a new instance of the <see cref="ExceptionMiddleware"/> class.
/// </summary>
/// <param name="next">The next delegate in the middleware pipeline.</param>
/// <param name="logger">The logger instance for logging exceptions.</param>
/// <param name="env">The current hosting environment.</param>
public class ExceptionMiddleware(RequestDelegate next, ILogger<ExceptionMiddleware> logger,
                            IHostEnvironment env)
{
    private readonly JsonSerializerOptions _options = new() { PropertyNamingPolicy = JsonNamingPolicy.CamelCase, WriteIndented = true };
    /// <summary>
    /// Invokes the middleware asynchronously. Catches exceptions, logs them, and returns a JSON error response.
    /// </summary>
    /// <param name="context">The current HTTP context.</param>
    /// <param name="log">The exception log repository.</param>
    /// <returns>A task representing the asynchronous operation.</returns>
    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Internal Server Error");

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var response = env.IsDevelopment() ?
                new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace?.ToString()) :
                new ApiException(context.Response.StatusCode, ex.Message, "Internal Server Error");


            var json = JsonSerializer.Serialize(response, _options);

            await context.Response.WriteAsync(json);
        }
    }
}
