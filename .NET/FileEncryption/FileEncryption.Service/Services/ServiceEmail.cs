using FileEncryption.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Service.Services
{
    public class ServiceEmail : IServiceSendMessage
    {

        public Task SendAsync(string? to, string from, string message, string acsessCode)
        {
            throw new NotImplementedException();
        }
    }
}
