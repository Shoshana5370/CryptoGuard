using FileEncryption.Core.DTOs;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileEncryption.Api.Controllers
{
    [ApiController]
    [Route("api/logs")]
    public class ActivityLogsController(IServiceActivityLogs service) : ControllerBase
    {
        private readonly IServiceActivityLogs _service = service;

        [HttpGet]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<IEnumerable<ActivityLogDto>>> GetAllLogs() => Ok(await _service.GetLogsAsync());
        [Authorize(Policy = "UserOrAdmin")]
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<ActivityLogDto>>> GetLogsByUser(int userId) {
            var logs = await _service.GetLogsByUserAsync(userId);
            if (logs == null || !logs.Any())
                return Ok(new List<ActivityLogDto>());
            return Ok(logs);

        }

        [HttpGet("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<ActivityLogDto>> GetLog(int id)
        {
            var log = await _service.GetLogAsync(id);
            return log == null ? NotFound() : Ok(log);
        }

        [HttpPost]
        [Authorize(Policy = "AdminOnly")]
        public async Task<IActionResult> LogAction([FromBody] CreateActivityLogDto request)
        {
            await _service.LogActionAsync(request);
            return Ok();
        }
    }
}

    
