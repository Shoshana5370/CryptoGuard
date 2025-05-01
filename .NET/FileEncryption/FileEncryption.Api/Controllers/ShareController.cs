using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FileEncryption.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShareController : ControllerBase
    {
        private readonly IServiceEmail _emailService;
        private readonly IServiceShare _shareService;
        private readonly IMapper _mapper;
        private readonly IServiceFile _fileService;

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
        [HttpPost("share")]
        public async Task<IActionResult> ShareFile([FromBody] SharePostModel req)  //to create a new share
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

            //share.SenderUserId = int.Parse(userId); // If you store the sender

            var share = await _shareService.ShareFileAsync(_mapper.Map<Share>(req));

            await _emailService.SendAsync(
                share.RecipientEmail,
                "You've received a file",
                $"Your access code is: {share.AccessCode}"
            );

            return Ok(new { share.Id, share.AccessCode, share.ExpiresAt });
        }

        [HttpPost("access")]
        public async Task<IActionResult> AccessSharedFile([FromBody] string input)
        {
            var share = await _shareService.GetValidShareByCodeAsync(input);
            var fileStream = await _fileService.DecryptAndDownloadFileAsync(share.FileKey);

            return File(fileStream, "application/octet-stream", "shared-file");
        }


    }
}
