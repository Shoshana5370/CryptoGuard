using System.ComponentModel.DataAnnotations;

namespace FileEncryption.Api.Models
{
    public class UserPostModel
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public bool isAdmin { get; set; }

    }
}
