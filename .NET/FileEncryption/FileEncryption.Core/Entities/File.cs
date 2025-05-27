using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace FileEncryption.Core.Entities
{

        [Table("Files")]
        public class File
        {
        [Key]    
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        public string ContentType { get; set; } = string.Empty;
        public string EncryptedUrl { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; } 
        public int? CreatedBy { get; set; }

            [ForeignKey(nameof(CreatedBy))]
            public required User UserCreated { get; set; }
            public DateTime UpdatedAt { get; set; }
            public bool IsDelete { get; set; }
           public string Sha256 { get; set; } = string.Empty;
           public string OriginalHash { get; set; } = string.Empty;
          public virtual ICollection<Share>? Shares { get; set; }
    }
}


