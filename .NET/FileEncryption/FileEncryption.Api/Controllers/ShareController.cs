using AutoMapper;
using FileEncryption.Api.Models;
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

        //// GET: api/<ShareController>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //// GET api/<ShareController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<ShareController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<ShareController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ShareController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}

        [HttpPost]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<Share>> ShareFile([FromBody] SharePostModel req)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            var share = await _shareService.ShareFileAsync(_mapper.Map<Share>(req),userId);

            await _emailService.SendAsync(
                share.RecipientEmail,share.RecipientUser?.Name,share.SharedByUser.Name,share.AccessCode,share.File.Name
            );

            return Ok(share);
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
            var (stream, fileName, contentType) = await _fileService.DecryptAndDownloadFileAsync(share.FileKey);

            return File(stream, contentType ?? "application/octet-stream", fileName);
        }


    }
}
