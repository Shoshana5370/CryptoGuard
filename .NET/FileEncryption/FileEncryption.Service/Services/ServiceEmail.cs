using FileEncryption.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Service.Services
{
    public class ServiceEmail : IServiceEmail
    {
        public Task SendAsync(string? recipientEmail, string v1, string v2)
        {
            throw new NotImplementedException();
        }
    }
}
