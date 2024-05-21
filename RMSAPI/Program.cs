using RMSAPI.Extentions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.ApplicationServices(builder.Configuration);
builder.Services.AddIdentitySerivces(builder.Configuration);
builder.Services.AddSwagger(builder.Configuration);
// Add CORS
builder.Services.AddCors(op => {
    op.AddDefaultPolicy(b=> {
        b.WithOrigins("http://localhost:5173")
        .AllowAnyHeader()
        .AllowAnyMethod();
    });
});

var app = builder.Build();
app.BuildRMS();
// Seed the db 
await app.SeedStaticData();
app.Run();
