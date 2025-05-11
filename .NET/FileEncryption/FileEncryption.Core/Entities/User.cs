using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace FileEncryption.Core.Entities
{
    [Table("Users")] // שם הטבלה בבסיס הנתונים
    public class User
    {
        [Key] // מזהה ייחודי
        public int Id { get; set; }

        [Required] // חובה
        [StringLength(100)] // אורך מקסימלי של 100 תווים
        [EmailAddress] // אימייל צריך להיות בפורמט נכון
        public string Email { get; set; }
        public string Name { get; set; }

        [Required] // חובה
        public string Password { get; set; } // סיסמה מוצפנת

        [StringLength(20)] // אורך מקסימלי של 20 תווים
        public bool IsAdmin { get; set; }

        [Column(TypeName = "DATETIME")] // סוג העמודה
        public DateTime CreatedAt { get; set; } = DateTime.Now; // תאריך יצירה
        [Column(TypeName = "DATETIME")]
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
        public virtual ICollection<FileEncryption.Core.Entities.File> Files { get; set; }

    }
}
