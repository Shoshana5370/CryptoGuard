using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public required string  Email { get; set; }
        public required string Name { get; set; }
        public required string Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
