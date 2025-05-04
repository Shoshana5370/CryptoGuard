using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceSendMessage
    {
        Task SendAsync(string? to, string from, string message,string acsessCode);
    }
}
