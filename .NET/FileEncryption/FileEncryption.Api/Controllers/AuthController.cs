using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.IServices;
using FileEncryption.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileEncryption.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IServiceAuth _authService;
        private readonly IMapper _mapper;


        public AuthController(IServiceAuth authService, IMapper mapper)
        {
            _mapper = mapper;
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel user)
        {
            var result = await _authService.Login(_mapper.Map<UserDto>(user));
            if (result == null)
            {
                return BadRequest("User not already exists or login failed.");
            }
            return Ok(result);
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
        [HttpPost("login1111")]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            // Validate CAPTCHA
            var storedCode = HttpContext.Session.GetString("CaptchaCode");
            if (storedCode == null || !storedCode.Equals(request.Captcha, StringComparison.OrdinalIgnoreCase))
                return BadRequest(new { error = "Invalid CAPTCHA" });

            // Authenticate user here...
            if (request.Username == "admin" && request.Password == "1234")
                return Ok(new { token = "example-token" });

            return Unauthorized(new { error = "Invalid credentials" });
        }

        public class LoginRequest
        {
            public string Username { get; set; } = "";
            public string Password { get; set; } = "";
            public string Captcha { get; set; } = "";
        }

    }


}

