//using Microsoft.AspNetCore.Mvc;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

//namespace FileEncryption.Api.Controllers
//{
//
//
//
//   [Route("api/[controller]")]
//    [ApiController]
//    public class CaptchaController : ControllerBase
//    {
//        // GET: api/<CaptchaController>
//        [HttpGet]
//        public IEnumerable<string> Get()
//        {
//            return new string[] { "value1", "value2" };
//        }

//        // GET api/<CaptchaController>/5
//        [HttpGet("{id}")]
//        public string Get(int id)
//        {
//            return "value";
//        }

//        // POST api/<CaptchaController>
//        [HttpPost]
//        public void Post([FromBody] string value)
//        {
//        }

//        // PUT api/<CaptchaController>/5
//        [HttpPut("{id}")]
//        public void Put(int id, [FromBody] string value)
//        {
//        }

//        // DELETE api/<CaptchaController>/5
//        [HttpDelete("{id}")]
//        public void Delete(int id)
//        {
//        }
//    }
//}
using Microsoft.AspNetCore.Mvc;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Drawing.Processing;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp.PixelFormats;
using System.Text;
using SixLabors.Fonts;
namespace FileEncryption
{
    [ApiController]
    [Route("api/[controller]")]
    public class CaptchaController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCaptcha()
        {
            var random = new Random();
            var code = random.Next(1000, 9999).ToString();

            HttpContext.Session.SetString("CaptchaCode", code);

            var image = new Image<Rgba32>(150, 50);
            image.Mutate(ctx =>
            {
                ctx.Fill(Color.White);
                ctx.DrawText(code, SystemFonts.CreateFont("Arial", 24), Color.Black, new PointF(10, 10));
            });

            using var ms = new MemoryStream();
            image.SaveAsPng(ms);
            return File(ms.ToArray(), "image/png");
        }

        [HttpPost("verify")]
        public IActionResult Verify([FromBody] CaptchaVerifyRequest request)
        {
            var storedCode = HttpContext.Session.GetString("CaptchaCode");
            bool isValid = string.Equals(storedCode, request.Input, StringComparison.OrdinalIgnoreCase);
            return Ok(new { success = isValid });
        }

        public class CaptchaVerifyRequest
        {
            public string Input { get; set; } = "";
        }
    }
}