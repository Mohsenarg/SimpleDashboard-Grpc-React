using GrpcServiceUser.Helper;
using GrpcServiceUser.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.RequireHttpsMetadata = false;
    options.SaveToken = true;
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(AuthenticationHandler.TokenKey)),
        ValidateIssuer = false,
        ValidateAudience = false
    };
});

builder.Services.AddCors();
builder.Services.AddAuthorization();
builder.Services.AddGrpc();



builder.Services.AddDistributedMemoryCache();

var app = builder.Build();

app.UseGrpcWeb();

app.MapGrpcService<UserOpService>().EnableGrpcWeb();
app.UseCors(options =>
     options.WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod());
app.UseAuthentication();
app.UseAuthorization();
app.Run();
