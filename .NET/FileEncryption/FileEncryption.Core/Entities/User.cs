using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace FileEncryption.Core.Entities
{
    [Table("Users")] // שם הטבלה בבסיס הנתונים
    public class User
    {
        [Key] 
        public int Id { get; set; }

        [Required] 
        [StringLength(100)] 
        [EmailAddress]
        public string Email { get; set; }
        public string Name { get; set; }

        [Required] 
        public string Password { get; set; } 

        [StringLength(20)] 
        public bool IsAdmin { get; set; }

        [Column(TypeName = "DATETIME")] 
        public DateTime CreatedAt { get; set; }
        [Column(TypeName = "DATETIME")]
        public DateTime UpdatedAt { get; set; }
        public virtual ICollection<FileEncryption.Core.Entities.File> Files { get; set; }
        public virtual ICollection<Share> SharesToOthers { get; set; }
        public virtual ICollection<Share> SharesWithMe { get; set; }
        public virtual ICollection<ActivityLog> ActivityLogs { get; set; }

    }
}
