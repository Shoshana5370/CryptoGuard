using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceShare
    {
        public Task<string> GetByAccessCodeAsync(string accessCode);
        public Task<Share> GetValidShareByCodeAsync(string v);
        public Task<Share> ShareFileAsync(Share share);
    }
}
