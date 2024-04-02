using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RMSAPI.Data;
using RMSAPI.Data.Entities;
using RMSAPI.Extentions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//builder.Services.AddAuthentication();
    //.AddBearerToken(o =>
    //{
    //    o.BearerTokenExpiration = TimeSpan.FromHours(1);
    //    o.ClaimsIssuer = "somone";
    //    o.RefreshTokenExpiration = TimeSpan.FromDays(1);
    //});
//builder.Services.AddAuthorizationBuilder();
//builder.Services.AddIdentityApiEndpoints<AppUser>(o =>
//{
//    //o.Password = new PasswordOptions
//    //{
//    //    RequireDigit = true,
//    //    RequiredLength = 5,
//    //    RequireUppercase = true,
//    //    RequireLowercase = true,
//    //    RequiredUniqueChars = 1,
//    //    RequireNonAlphanumeric = true,
//    //};
//    //o.User = new UserOptions
//    //{
//    //    RequireUniqueEmail = true,
//    //};
//    //o.Tokens = new TokenOptions
//    //{
//    //    AuthenticatorIssuer = "someone"
//    //};
//}).AddEntityFrameworkStores<DataContext>()
//.AddClaimsPrincipalFactory<AppUser>()
//.AddApiEndpoints();

builder.Services.ApplicationServices(builder.Configuration);
builder.Services.AddIdentitySerivces(builder.Configuration);


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Routine Management System",
        Version = "v1"
    });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
    {
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 1safsfsdfdfd\"",
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement{
        {
            new OpenApiSecurityScheme{
                Reference = new OpenApiReference{
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[]{}
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.MapGroup("/api/auth").MapIdentityApi<AppUser>();
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<RMSAPI.Data.DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    var roleManager = services.GetRequiredService<RoleManager<AppRole>>();
    await context.Database.MigrateAsync();
    //await context.Database.ExecuteSqlRawAsync("DELETE FROM [Connections]");
    await RMSAPI.Data.Seeder.SeedUsers(userManager, roleManager);
}
catch (Exception ex)
{
    var logger = services.GetService<ILogger<Program>>();
    logger.LogError(ex, "An error occur while seeding data/ Migration");
}
app.Run();
