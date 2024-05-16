using RMSAPI.Extentions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.ApplicationServices(builder.Configuration);
builder.Services.AddIdentitySerivces(builder.Configuration);
builder.Services.AddSwagger(builder.Configuration);

var app = builder.Build();
app.BuildRMS();
// Seed the db 
await app.SeedStaticData();
app.Run();
