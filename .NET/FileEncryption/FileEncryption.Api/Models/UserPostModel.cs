using System.ComponentModel.DataAnnotations;

namespace FileEncryption.Api.Models
{
    public class UserPostModel
    {
        public required string Email { get; set; }
        public required string Name { get; set; }
        public required string Password { get; set; }
        public required string CaptchaToken { get; set; }
        public bool IsAdmin { get; set; }

    }
}
