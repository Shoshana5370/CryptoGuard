using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceEmail
    {
        Task SendAsync(string? recipientEmail, string v1, string v2);
    }
}
