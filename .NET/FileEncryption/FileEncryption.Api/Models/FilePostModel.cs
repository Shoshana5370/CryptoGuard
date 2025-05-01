using FileEncryption.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace FileEncryption.Api.Models
{
    public class FilePostModel
    {
        public string Name { get; set; }
        public string EncryptedUrl { get; set; } // כתובת הקובץ המוצפן ב-S3
        public int CreatedBy { get; set; } // מזהה המשתמש שיצר את הרשומה
        public bool isDelete { get; set; }

    }
}
