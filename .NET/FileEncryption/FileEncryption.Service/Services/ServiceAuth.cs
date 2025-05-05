using AutoMapper;
using FileEncryption.Core;
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
    public class ServiceAuth:IServiceAuth
    {
        private readonly IConfiguration _configuration;
        private readonly IRepositoryManager _repositoryManager;
        private readonly IServiceUser _userService;
        private readonly IMapper _mapper;

        public ServiceAuth(IConfiguration configuration, IRepositoryManager repository, IServiceUser userService,IMapper mapper)
        {
            _configuration = configuration;
            _repositoryManager = repository;
            _userService = userService;
            _mapper = mapper;

        }


        public async Task<AuthResponse> Login(UserDto user)
        {
            var userExiting = await _repositoryManager.Users.FindByEmailAsync(user.Email);
            if (userExiting == null)
            {
                return null;
            }

            var token = GenerateJwtToken(_mapper.Map<UserDto>(userExiting));

            return new AuthResponse
            {
                Token = token,
                User = _mapper.Map<UserDto>(userExiting)
            };
        }

        public async Task<AuthResponse> Register(UserDto user)
        {
            var userExiting = await _repositoryManager.Users.FindByEmailAsync(user.Email);
            if (userExiting != null)
            {
                return null;
            }

            await _userService.InsertUserAsync(user);

            var token = GenerateJwtToken(user);

            return new AuthResponse
            {
                Token = token,
                User = user
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

