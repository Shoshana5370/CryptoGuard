using FileEncryption.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core
{
    public class AuthResponse
    {
        public required string Token { get; set; }
        public required UserDto User { get; set; }
    }
}
