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
    public class FilesController(IServiceFile fileService, IMapper mapper) : ControllerBase
    {
        private readonly IServiceFile _fileService = fileService;
        private readonly IMapper _mapper = mapper;

        [HttpGet]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<IEnumerable<FileDto>>> Get()
        {
            var files = await _fileService.FindAllFilesAsync();
            if (files == null || !files.Any())
            {
                return NotFound();
            }

            return Ok(_mapper.Map<IEnumerable<FileDto>>(files));
        }
        [Authorize(Policy = "AdminOnly")]
        [HttpGet("{id}")]
        public async Task<ActionResult<FileDto>> Get(int id)
        {
            var file = await _fileService.FindFileByIdAsync(id);

            if (file == null)
            {
                return NotFound(); 
            }

            return Ok(_mapper.Map<FileDto>(file)); 
        }
        [HttpPost]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<FileDto>> Post([FromBody] FilePostModel file)
        {
            if (file == null)
            {
                return BadRequest(); 
            }

            var result = await _fileService.InsertFileAsync(_mapper.Map<FileDto>(file));

            if (result != null)
            {
                return Ok(_mapper.Map<FileDto>(result));
            }
            return BadRequest();
        }
        [HttpPut("{id}")]
        [Authorize(Policy = "AdminOnly")]
        public async Task<ActionResult<FileDto>> Put(int id, [FromBody] FileDto file)
        {
            if (file == null || file.Id != id)
            {
                return BadRequest();
            }

            var result = await _fileService.UpdateExistingFileAsync(id, file);
            if (result == null)
            {
                return NotFound();
            }

            return Ok(_mapper.Map<FileDto>(result));
        }

        [HttpDelete("{id}")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            var result = await _fileService.DiscardFileAsync(id);

            if (!result)
            {
                return NotFound();
            }

            return NoContent();
        }

        [HttpPost("upload")]
        [Authorize(Policy = "UserOrAdmin")]
        public async Task<ActionResult<FileDto>> UploadEncryptedFile([FromForm] IFormFile file, [FromForm] string originalHash)
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
                ContentType = file.ContentType,
                OriginalHash = originalHash
            };
            var fileResponse = await _fileService.EncryptAndUploadFileAsync(dto, fileDto);
            if (fileResponse == null)
            {
                return BadRequest("Upload a file failed.");
            }
            return Ok(fileResponse);
        }

    }
}
    

