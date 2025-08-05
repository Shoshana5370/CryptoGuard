using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Utilities;
using System.Security.Claims;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace FileEncryption.Api.Controllers
{
    [Route("api/users")]
    [Authorize]
    [ApiController]
    public class UserController(IServiceUser userService, IMapper mapper,IServiceActivityLogs logsService) : ControllerBase
    {
        private readonly IServiceUser _userService = userService;
        private readonly IServiceActivityLogs _logsService = logsService;
        private readonly IMapper _mapper = mapper;

        [HttpGet("files")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<IEnumerable<FileDto>>>GetFilesByUserIdAsync()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                return Unauthorized("Invalid or missing user ID in token.");
            }

            var files = await _userService.GetFilesByUserIdAsync(userId);
            if(files == null)
            {
                return NotFound();
            }
            return Ok(files);
        }
        [HttpGet("shared-with-me")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<IEnumerable<ShareDto>>> GetSharesWithMeAsync()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                return Unauthorized("Invalid or missing user ID in token.");
            }

            var shares = await _userService.GetSharesWithMeAsync(userId);

            return Ok(shares ?? []);
        }
        [HttpGet("shared-to-others")]
        [Authorize(Policy = "UserOrAdmin")]
        [HttpGet("logs")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<IEnumerable<ActivityLogDto>>> GetLogsByUser()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                return Unauthorized("Invalid or missing user ID in token.");
            }
            var logs = await _logsService.GetLogsByUserAsync(userId);
            if (logs == null || !logs.Any())
                return Ok(new List<ActivityLogDto>());
            return Ok(logs);
        }

             
        public async Task<ActionResult<IEnumerable<ShareDto>>> GetSharesToOthersAsync()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                return Unauthorized("Invalid or missing user ID in token.");
            }

            var shares = await _userService.GetSharesToOthersAsync(userId);

            return Ok(shares ?? []);
        }

        [HttpGet]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetAsync()
        {
            var users = await _userService.FindAllUsersAsync();
            if (users == null || !users.Any())
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IEnumerable<UserDto>>(users));
        } 
        [HttpGet("{id}")]
        [Authorize(Policy = "AdminOnly")]

        public async Task<ActionResult<UserDto>> Get(int id)
        {
            var user = await _userService.FindUserByIdAsync(id);

            if (user == null)
            {
                return NotFound(); 
            }

            return Ok(_mapper.Map<UserDto>(user)); 
        }


        [HttpPost]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<UserDto>> Post([FromBody] UserPostModel user)
        {
            if (user == null)
            {
                return BadRequest(); 
            }
           
            var result = await _userService.InsertUserAsync(_mapper.Map<UserDto>(user));

            if (result != null)
            {
                return Ok(_mapper.Map<UserDto>(result));
            }
            return BadRequest();
        
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<UserDto>> Put(int id, [FromBody] UserDto user)
        {
            if (user == null || user.Id != id)
            {
                return BadRequest();
            }

            var result = await _userService.UpdateExistingUserAsync(id, user);
            if (result == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<UserDto>(result)); }

        [HttpDelete("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var result = await _userService.DiscardUserAsync(id);

            if (!result)
            {
                return NotFound(); 
            }

            return NoContent(); 
        }

        //[HttpPost("mail")]
        //[Authorize(Policy = "UserOrAdmin")]
        //public async Task<ActionResult>SendEmail()



    }
}   