using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
        public class FileDto
        {
            public int Id { get; set; } 

            public string Name { get; set; }
            public string EncryptedUrl { get; set; } 
            public string ContentType { get; set; }

            public DateTime CreatedAt { get; set; } 
            public DateTime UpdatedAt { get; set; }

            public int CreatedBy { get; set; } 

            public bool isDelete { get; set; }

    }
}

