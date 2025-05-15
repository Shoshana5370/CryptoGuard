using AutoMapper;
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
    public class UserController : ControllerBase
    {
        private readonly IServiceUser _userService;
        private readonly IMapper _mapper;
        public UserController(IServiceUser userService,IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }
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


        // GET: api/<UserController>
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


        // GET api/<UserController>/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<UserDto>> Get(int id)
        //{
        //    var user = await _userService.FindUserByIdAsync(id);

        //    if (user == null)
        //    {
        //        return NotFound(); // Return 404 if user is not found
        //    }

        //    return Ok(_mapper.Map<UserDto>(user)); // Return 200 OK with the user
        //}

        //    // POST api/<UserController>
        //    [HttpPost]
        //    public async Task<ActionResult<UserDto>> Post([FromBody] UserPostModel user)
        //    {
        //        if (user == null)
        //        {
        //            return BadRequest(); // Return 400 Bad Request if the user object is null
        //        }
        //        //UserDto userDto = _mapper.Map<UserDto>(user);
        //        var result = await _userService.InsertUserAsync(_mapper.Map<UserDto>(user));

        //        if (result!=null)
        //        {
        //            return Ok( _mapper.Map<UserDto>(result));
        //        }
        //        return BadRequest();
        //        //?return StatusCode(500, "A problem happened while handling your request."); // Return 500 Internal Server Error
        //    }

        //    // PUT api/<UserController>/5
        //    [HttpPut("{id}")]
        //    public async Task<ActionResult<UserDto>> Put(int id, [FromBody] UserDto user)
        //    {
        //        if (user == null || user.Id != id)
        //        {
        //            return BadRequest(); // Return 400 Bad Request if the user object is null or id does not match
        //        }

        //        var result = await _userService.UpdateExistingUserAsync(id, user);
        //        if (result==null)
        //        {
        //            return NotFound(); // Return 404 if the user to update is not found
        //        }

        //        return Ok(_mapper.Map<UserDto>(result)); // Return 204 No Content on successful update
        //    }

        //    // DELETE api/<UserController>/5
        //    [HttpDelete("{id}")]
        //    public async Task<ActionResult<bool>> Delete(int id)
        //    {
        //        var result = await _userService.DiscardUserAsync(id);

        //        if (!result)
        //        {
        //            return NotFound(); // Return 404 if the user to delete is not found
        //        }

        //        return NoContent(); // Return 204 No Content on successful deletion
        //    }





    }
}   