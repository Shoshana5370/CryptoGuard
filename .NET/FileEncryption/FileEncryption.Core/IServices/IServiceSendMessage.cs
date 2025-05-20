using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceSendMessage
    {
        Task<bool> SendAsync(string to, string toUser, string fromUser, string accessCode, string fileName);
    }
}
