using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.Entities
{
    public class Share
    {
        public int Id { get; set; }

        [ForeignKey(nameof(File))]
        public int FileKey { get; set; }
        public File File { get; set; }
        public string? AccessCode { get; set; }       
        public DateTime ExpiresAt { get; set; }      
        public string? RecipientEmail { get; set; }  
        public bool Used { get; set; } = false;
    }
}
