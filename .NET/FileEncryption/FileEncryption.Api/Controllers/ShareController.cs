using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
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
    public class ShareController : ControllerBase
    {
        private readonly IServiceSendMessage _emailService;
        private readonly IServiceShare _shareService;
        private readonly IMapper _mapper;
        private readonly IServiceFile _fileService;

        public ShareController(IServiceSendMessage emailService, IServiceShare shareService, IMapper mapper, IServiceFile fileService)
        {
            _emailService = emailService;
            _shareService = shareService;
            _mapper = mapper;
            _fileService = fileService;
        }

        public class ExtendShareExpirationDto
        {
            public string NewDate { get; set; } = null!;
        }
        [HttpPost("{id}")]
        public async Task<IActionResult> ExtendExpiration(int id, [FromBody] ExtendShareExpirationDto dto)
        {
            var success = await _shareService.ExtendExpirationAsync(id, dto.NewDate);
            if (!success)
            {
                return NotFound($"Share with ID {id} not found or date invalid.");
            }

            return NoContent(); // 204
        }

        [HttpPost]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<ShareDto>> ShareFile([FromBody] SharePostModel req)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var share = await _shareService.ShareFileAsync(_mapper.Map<Share>(req),userId);
            if (share != null)
            {
               bool success= await _emailService.SendAsync(
                share.RecipientEmail, share.RecipientUser?.Name, share.SharedByUser.Name, share.AccessCode, share.File.Name);
                if (!success)
                {
                    return BadRequest("the Email is not exist.");
                }
                return Ok(share);
            
            }
            return BadRequest("the share failed.");
          
        }
        public class AccessRequestDto
        {
            public int Id { get; set; }
            public string Code { get; set; }
        }

        [HttpPost("access")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<IActionResult> AccessSharedFile([FromBody] AccessRequestDto requestDto)
        {
            var share = await _shareService.GetValidShareByCodeAsync(requestDto.Code);
            if(share.Used)
            {
                return BadRequest("this file is aleardy used!");
            }
            var (stream, fileName, contentType) = await _fileService.DecryptAndDownloadFileAsync(share.FileKey);
            share.Used = true;
            await _shareService.UpdateShareAsync(share);
            return File(stream, contentType ?? "application/octet-stream", fileName);
        }


    }
}
