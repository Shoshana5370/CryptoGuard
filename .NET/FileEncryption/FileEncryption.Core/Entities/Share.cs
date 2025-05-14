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
        public FileEncryption.Core.Entities.File  File{ get; set; }
        public string? AccessCode { get; set; }       
        public DateTime ExpiresAt { get; set; }      
        public string? RecipientEmail { get; set; }
        [ForeignKey(nameof(SharedByUser))]
        public int SharedByUserId { get; set; }
        public User SharedByUser { get; set; } // User who shares the file

        // Foreign key for the user who is the recipient (can be null)
        [ForeignKey(nameof(RecipientUser))]
        public int? RecipientUserId { get; set; } // Nullable foreign key
        public User? RecipientUser { get; set; } // User who receives the file
        public bool Used { get; set; } = false;
    }
}
