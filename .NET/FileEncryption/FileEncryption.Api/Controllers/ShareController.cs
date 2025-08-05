using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
namespace FileEncryption.Api.Controllers
{
    [Route("api/shares")]
    [ApiController]
    public class ShareController(IServiceSendMessage emailService, IServiceShare shareService, IMapper mapper, IServiceFile fileService) : ControllerBase
    {
        private readonly IServiceSendMessage _emailService = emailService;
        private readonly IServiceShare _shareService = shareService;
        private readonly IMapper _mapper = mapper;
        private readonly IServiceFile _fileService = fileService;

        public class ExtendShareExpirationDto
        {
            public string NewDate { get; set; } = null!;
        }
        [HttpPut("{id}")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<IActionResult> ExtendExpiration(int id, [FromBody] ExtendShareExpirationDto dto)
        {
            var success = await _shareService.ExtendExpirationAsync(id, dto.NewDate);
            if (!success)
            {
                return NotFound($"Share with ID {id} not found or date invalid.");
            }

            return NoContent(); 
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
            public required string Code { get; set; }
        }

        [HttpPost("access")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<IActionResult> AccessSharedFile([FromBody] AccessRequestDto requestDto)
        {
            var share = await _shareService.GetValidShareByCodeAsync(requestDto.Code);
           if(share ==null)
                return BadRequest("This share is Used or date Expired");
            var (stream, fileName, contentType, originalHash) = await _fileService.DecryptAndDownloadFileAsync(share.FileKey);

            share.Used = true;
            await _shareService.UpdateShareAsync(share);

            using var ms = new MemoryStream();
            await stream.CopyToAsync(ms);
            var fileBytes = ms.ToArray();
            return Ok(new
            {
                file = Convert.ToBase64String(fileBytes),
                fileName,
                contentType,
                originalHash
            });
        }




    }
}
