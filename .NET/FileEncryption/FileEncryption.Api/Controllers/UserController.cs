using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace FileEncryption.Api.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class UserController(IServiceUser userService, IMapper mapper) : ControllerBase
    {
        private readonly IServiceUser _userService = userService;
        private readonly IMapper _mapper = mapper;

        [HttpGet("GetFiles")]
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
        [HttpGet("GetSharesWithMe")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<IEnumerable<ShareDto>>> GetSharesWithMeAsync()
        {
            // Extract user ID from token (from the claims)
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                return Unauthorized("Invalid or missing user ID in token.");
            }

            var shares = await _userService.GetSharesWithMeAsync(userId);

            if (shares == null || !shares.Any())
            {
                return NotFound("No shares found.");
            }

            return Ok(shares);
        }
        [HttpGet("GetSharesToOthers")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<IEnumerable<ShareDto>>> GetSharesToOthersAsync()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(userIdClaim) || !int.TryParse(userIdClaim, out int userId))
            {
                return Unauthorized("Invalid or missing user ID in token.");
            }

            var shares = await _userService.GetSharesToOthersAsync(userId);

            if (shares == null || !shares.Any())
            {
                return NotFound("No shares to others found.");
            }

            return Ok(shares);
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





    }
}   