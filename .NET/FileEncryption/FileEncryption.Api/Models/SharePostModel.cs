using System.ComponentModel.DataAnnotations.Schema;

namespace FileEncryption.Api.Models
{
    public class SharePostModel
    {
        public int FileKey { get; set; }
        public string AccessCode { get; set; }
        public DateTime ExpiresAt { get; set; }
        public string? RecipientEmail { get; set; }
        //public bool Used { get; set; } = false;
    }
}
