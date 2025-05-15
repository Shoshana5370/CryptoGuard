using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
    public class ShareDto
    {
        public int Id { get; set; }
        public int FileKey { get; set; }
        public string? AccessCode { get; set; }
        public DateTime ExpiresAt { get; set; }
        public string? RecipientEmail { get; set; }
        public int SharedByUserId { get; set; }
        public int? RecipientUserId { get; set; } 
        public bool Used { get; set; } 
    }
}
