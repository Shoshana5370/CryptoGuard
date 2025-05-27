using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
    public class FileFormDto
    {
        public string FileName { get; set; } = string.Empty;
        public required Stream Content { get; set; }
        public string ContentType { get; set; } = string.Empty;
    }
}
