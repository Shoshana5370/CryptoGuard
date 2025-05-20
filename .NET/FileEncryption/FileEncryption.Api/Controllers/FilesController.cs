using AutoMapper;
using FileEncryption.Api.Models;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
namespace FileEncryption.Api.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly IServiceFile _fileService;
        private readonly IMapper _mapper;

        public FilesController(IServiceFile fileService, IMapper mapper)
        {
            _fileService = fileService;
            _mapper = mapper;
        }

        // GET: api/<FilesController>
        [HttpGet]
        [Authorize(Policy = "UserOrAdmin")]
         
        public async Task<ActionResult<IEnumerable<FileDto>>> GetAsync()
        {
            var files = await _fileService.FindAllFilesAsync();
            if (files == null || !files.Any())
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IEnumerable<FileDto>>(files));
        }

        //// GET api/<FilesController>/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<FileDto>> Get(int id)
        //{
        //    var file = await _fileService.FindFileByIdAsync(id);

        //    if (file == null)
        //    {
        //        return NotFound(); // Return 404 if file is not found
        //    }

        //    return Ok(_mapper.Map<FileDto>(file)); // Return 200 OK with the file
        //}

        //// POST api/<FilesController>
        //[HttpPost]
        //public async Task<ActionResult<FileDto>> Post([FromBody] FilePostModel file)
        //{
        //    if (file == null)
        //    {
        //        return BadRequest(); // Return 400 Bad Request if the file object is null
        //    }

        //    var result = await _fileService.InsertFileAsync(_mapper.Map<FileDto>(file));

        //    if (result != null)
        //    {
        //        return Ok(_mapper.Map<FileDto>(result));
        //    }
        //    return BadRequest();
        //}
        [HttpPut("{id}")]
        public async Task<ActionResult<FileDto>> Put(int id, [FromBody] FileDto file)
        {
            if (file == null || file.Id != id)
            {
                return BadRequest(); // Return 400 Bad Request if the file object is null or id does not match
            }

            var result = await _fileService.UpdateExistingFileAsync(id, file);
            if (result == null)
            {
                return NotFound(); // Return 404 if the file to update is not found
            }

            return Ok(_mapper.Map<FileDto>(result)); // Return 200 OK on successful update
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var result = await _fileService.DiscardFileAsync(id);

            if (!result)
            {
                return NotFound(); // Return 404 if the file to delete is not found
            }

            return NoContent(); // Return 204 No Content on successful deletion
        }

        [HttpPost("upload")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<FileDto>> UploadEncryptedFile(IFormFile file)
        {
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);
            int userId = int.Parse(userIdClaim);
            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");
            var dto = new FileFormDto
            {
                FileName = file.FileName,
                Content = file.OpenReadStream(),
                ContentType = file.ContentType
            };
            var fileDto = new FileDto
            {
                Name = file.FileName,
                CreatedBy = userId,
                ContentType = file.ContentType
            };
            var fileResponse= await _fileService.EncryptAndUploadFileAsync(dto,fileDto);
            if(fileResponse == null)
            {
                return BadRequest("Upload a file failed.");
            }
            return Ok(fileResponse);
        }
        //[HttpGet("download/{fileKey}")]
        //public async Task<IActionResult> DownloadEncryptedFile(string fileKey)
        //{
        //    //var decryptedStream = await _fileService.DecryptAndDownloadFileAsync(fileKey,);

        //    //return File(decryptedStream, "application/octet-stream", "decrypted-file");

        //}


    }
}
    

