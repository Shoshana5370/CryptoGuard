using FileEncryption.Core.DTOs;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileEncryption.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ActivityLogsController : ControllerBase
    {
        private readonly IServiceActivityLogs _service;

        public ActivityLogsController(IServiceActivityLogs service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLogs() => Ok(await _service.GetLogsAsync());

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetLogsByUser(int userId) => Ok(await _service.GetLogsByUserAsync(userId));

        [HttpGet("{id}")]
        public async Task<IActionResult> GetLog(int id)
        {
            var log = await _service.GetLogAsync(id);
            return log == null ? NotFound() : Ok(log);
        }

        [HttpPost]
        public async Task<IActionResult> LogAction([FromBody] CreateActivityLogDto request)
        {
            await _service.LogActionAsync(request);
            return Ok();
        }
    }
}

    
