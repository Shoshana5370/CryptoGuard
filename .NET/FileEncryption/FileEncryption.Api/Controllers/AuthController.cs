using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
namespace FileEncryption.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IServiceAuth _authService;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public AuthController(IServiceAuth authService, IMapper mapper,IConfiguration configuration)
        {
            _mapper = mapper;
            _authService = authService;
            _configuration = configuration;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserPostModel user)
        {
            var result = await _authService.Register(_mapper.Map<UserDto>(user));
            if (result == null)
            {
                return BadRequest("User already exists or registration failed.");
            }
            return Ok(result);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel user)
        {
            var isCaptchaValid = await VerifyCaptchaAsync(user.CaptchaToken);
            if (!isCaptchaValid)
            {
                return BadRequest("Invalid reCAPTCHA");
            }
            var result = await _authService.Login(_mapper.Map<UserDto>(user));
            if (result == null)
            {
                return BadRequest("User not already exists or login failed.");
            }

            return Ok(result);
        }

        private async Task<bool> VerifyCaptchaAsync(string token)
        {
            var secret = _configuration["GoogleReCaptcha:SecretKey"]; 
            using var client = new HttpClient();
            var response = await client.PostAsync(
                $"https://www.google.com/recaptcha/api/siteverify?secret={secret}&response={token}",
                null);

            var json = await response.Content.ReadAsStringAsync();
            var result = JsonSerializer.Deserialize<ReCaptchaResponse>(json, options: new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return result?.Success == true;
        }
    }
    public class ReCaptchaResponse
    {
        public bool Success { get; set; }
        public DateTime ChallengeTs { get; set; }
        public string Hostname { get; set; }
        public List<string> ErrorCodes { get; set; }
    }


}

