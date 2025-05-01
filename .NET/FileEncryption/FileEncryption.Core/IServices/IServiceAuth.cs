using FileEncryption.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceAuth
    {
        public Task<AuthResponse> Login(UserDto userDto);
        public Task<AuthResponse> Register(UserDto userDto);
    }
}
