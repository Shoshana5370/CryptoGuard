using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using FileEncryption.Data.Repository;
using FileEncryption.Data;
using FileEncryption.Service.Services;
using Microsoft.EntityFrameworkCore;
using FileEncryption.Core;
using FileEncryption.Api.Models;
using Amazon.S3;
using Amazon.Extensions.NETCore.Setup;
using Amazon;
using Amazon.Runtime;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});
builder.Services.AddCors(opt => opt.AddPolicy("MyPolicy", policy => {
    policy.WithOrigins(
         "https://cryptoguardapplication.onrender.com",
         "http://localhost:5173"
     )
           .AllowAnyHeader()
          .AllowAnyMethod();
}));
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("AdminOnly", policy => policy.RequireRole("Admin"));
    options.AddPolicy("UserOrAdmin", policy => policy.RequireRole("User", "Admin"));
});
builder.Services.AddControllers(); builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.WriteIndented = true;
}); builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHttpClient();
var awsOptions = new AWSOptions
{
    Credentials = new BasicAWSCredentials(
        builder.Configuration["AWS:AccessKey"],
        builder.Configuration["AWS:SecretKey"]
    ),
    Region = RegionEndpoint.GetBySystemName(builder.Configuration["AWS:Region"])
};
builder.Services.AddDefaultAWSOptions(awsOptions);
builder.Services.AddAWSService<IAmazonS3>();
builder.Services.AddScoped<IRepositoryFile, RepositoryFile>();
builder.Services.AddScoped<IRepositoryActivityLogs, RepositoryActivityLogs>();
builder.Services.AddScoped<IRepositoryUser, RepositoryUser>();
builder.Services.AddScoped<IRepositoryShare, RepositoryShare>();
builder.Services.AddScoped<IServiceSendMessage,ServiceEmail>();
builder.Services.AddScoped<IServiceAuth, ServiceAuth>();
builder.Services.AddScoped<IServiceFile, ServiceFile>();
builder.Services.AddScoped<IServiceShare, ServiceShare>();
builder.Services.AddScoped<IServiceUser, ServiceUser>();
builder.Services.AddScoped<IServiceActivityLogs, ServiceActivityLogs>();
builder.Services.AddScoped<IRepositoryManager, RepositoryManager>();
var connectionString = builder.Configuration["DbConnectionString"];
builder.Services.AddDbContext<DataContext>(
    options => options.UseMySql(connectionString,
    new MySqlServerVersion(new Version(8, 0, 41)),
    mysqlOptions =>
    {
        mysqlOptions.EnableRetryOnFailure(
            maxRetryCount: 10,
            maxRetryDelay: TimeSpan.FromSeconds(30),
            errorNumbersToAdd: null);
    }));
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddAutoMapper(typeof(MappingProfilePostModel));
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenAnyIP(int.Parse(port));
});
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
    });
}
app.UseHttpsRedirection();
app.UseCors("MyPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapGet("/", () => "CryptoGuard API is running");

app.Run();
