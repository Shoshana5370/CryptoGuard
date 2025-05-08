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

    }


}

