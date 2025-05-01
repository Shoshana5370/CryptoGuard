using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Service.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileEncryption.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ServiceAuth _authService;
        private readonly IMapper _mapper;


        public AuthController(ServiceAuth authService, IMapper mapper)
        {
            _mapper = mapper;
            _authService = authService;
        }

        [HttpPost("login")]
        public ActionResult Login([FromBody] LoginModel user)
        {
            var token = _authService.Login(_mapper.Map<UserDto>(user));
            if(token==null)
            {
                return BadRequest(); 
            }
            return Ok(token);
        }
        [HttpPost("register")]
        public ActionResult Register([FromBody] UserPostModel user)
        {
            var token = _authService.Register(_mapper.Map<UserDto>(user));
            if (token == null)
            {
                return BadRequest();
            }
            return Ok(token);
        }
    }


}

