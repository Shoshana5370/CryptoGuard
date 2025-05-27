using AutoMapper;
using FileEncryption.Core;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace FileEncryption.Service.Services
{
    public class ServiceAuth(IConfiguration configuration, IRepositoryManager repository, IServiceUser userService, IMapper mapper,IServiceActivityLogs serviceActivityLogs) : IServiceAuth
    {
        private readonly IConfiguration _configuration = configuration;
        private readonly IRepositoryManager _repositoryManager = repository;
        private readonly IServiceUser _userService = userService;
        private readonly IMapper _mapper = mapper;
        private readonly IServiceActivityLogs _activityLogService=serviceActivityLogs;
        private readonly IPasswordHasher<User> _hasher = new PasswordHasher<User>();
        public async Task<AuthResponse> Login(UserDto user)
        {
            var userExiting = await _repositoryManager.Users.FindByEmailAsync(user.Email);
            if (userExiting == null)
            {
                return null;
            }
            var hasher = new PasswordHasher<User>();
            var result = hasher.VerifyHashedPassword(userExiting, userExiting.Password, user.Password);

            if (result != PasswordVerificationResult.Success)
                return null;
            ;
            var token = GenerateJwtToken(_mapper.Map<UserDto>(userExiting));
            await _activityLogService.LogActionAsync(new CreateActivityLogDto
            {
                UserId = userExiting.Id,
                Action = "Login",
                Description = "User logged in"
            });
            return new AuthResponse
            {
                Token = token,
                User = _mapper.Map<UserDto>(userExiting)
            };
        }



        public async Task<AuthResponse> Register(UserDto userDto)
        {
            var existingUser = await _repositoryManager.Users.FindByEmailAsync(userDto.Email);
            if (existingUser != null)
                return null; 
            var newUser = new User
            {
                Email = userDto.Email,
                Name = userDto.Name,
                Password = _hasher.HashPassword(null, userDto.Password) 
            };

            newUser.Password = _hasher.HashPassword(newUser, userDto.Password);
            newUser.SharesWithMe = await _repositoryManager.Shares.GetSharesAsyncByEmail(userDto.Email);
            await _repositoryManager.Users.AddUserAsync(newUser);
            await _repositoryManager.Save();
            var token = GenerateJwtToken(_mapper.Map<UserDto>(newUser));
            await _activityLogService.LogActionAsync(new CreateActivityLogDto
            {
                UserId = newUser.Id,
                Action = "Register",
                Description = "New user registered"
            });

            return new AuthResponse
            {
                Token = token,
                User = _mapper.Map<UserDto>(newUser)
            };
        }

        private string GenerateJwtToken(UserDto user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
            new Claim(ClaimTypes.Name, user.Name),
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Role, user.IsAdmin?"Admin":"User")
            };
            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(1),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

