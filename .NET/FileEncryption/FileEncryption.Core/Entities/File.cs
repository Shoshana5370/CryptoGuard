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
            public string Name { get; set; }
            public string EncryptedUrl { get; set; }

            public DateTime CreatedAt { get; set; } = DateTime.Now;
            public int? CreatedBy { get; set; }

           [ForeignKey(nameof(CreatedBy))]
            public User UserCreated { get; set; }
            public DateTime UpdatedAt { get; set; } = DateTime.Now;
            public bool isDelete { get; set; }
            public virtual ICollection<Share> Shares { get; set; }
    }
}


