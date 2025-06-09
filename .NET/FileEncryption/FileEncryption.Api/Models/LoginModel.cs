namespace FileEncryption.Api.Models
{
    public class LoginModel
    {
            public required string Email { get; set; }
            public required string Password { get; set; }
            public required string CaptchaToken { get; set; }

    }
}
