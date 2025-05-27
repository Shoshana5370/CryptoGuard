using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
        public class FileDto
        {
        private string name=string.Empty;

        public int Id { get; set; }

        public string Name { get => name; set => name = value; }
        public string EncryptedUrl { get; set; } = string.Empty;
        public string ContentType { get; set; } = string.Empty;

            public DateTime CreatedAt { get; set; } 
            public DateTime UpdatedAt { get; set; }

            public int CreatedBy { get; set; } 

            public bool IsDelete { get; set; }
        public string Sha256 { get; set; } = string.Empty;
        public string OriginalHash { get; set; } = string.Empty;
    }
}

