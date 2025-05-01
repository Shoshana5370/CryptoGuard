using FileEncryption.Core.DTOs;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace FileEncryption.Service.Services
{
    public class ServiceAuth
    {
        private readonly IConfiguration _configuration;
        private readonly IRepositoryUser _user;
        private readonly IServiceUser _userService;

        public ServiceAuth(IConfiguration configuration, IRepositoryUser user, IServiceUser userService)
        {
            _configuration = configuration;
            _user = user;
            _userService = userService;

        }

       
        public async Task<string> Register(UserDto user)
        {
            var userExiting = await _user.FindByEmailAsync(user.Email);
            if (user != null)
            {
                return null;
            }
            await _userService.InsertUserAsync(user);
            return GenerateJwtToken(user);
        }

        public async Task<string> Login(UserDto user)
        {
            var userExiting = await _user.FindByEmailAsync(user.Email);
            if (user == null)
            {
                return null;
            }
            return GenerateJwtToken(user);
        }


        private string GenerateJwtToken(UserDto user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
            new Claim(ClaimTypes.Name, user.Name),
            new Claim("isAdmin", user.IsAdmin.ToString())
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

