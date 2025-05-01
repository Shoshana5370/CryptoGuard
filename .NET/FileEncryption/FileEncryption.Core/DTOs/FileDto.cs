using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
        public class FileDto
        {
            public int Id { get; set; } // מזהה קובץ

            public string Name { get; set; } // שם הקובץ

            public string EncryptedUrl { get; set; } // כתובת הקובץ המוצפן ב-S3

            public DateTime CreatedAt { get; set; } // תאריך העלאה

            public int CreatedBy { get; set; } // מזהה המשתמש שיצר את הרשומה


        public bool isDelete { get; set; }

    }
}

