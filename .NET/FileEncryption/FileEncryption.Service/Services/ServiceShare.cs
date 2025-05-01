using FileEncryption.Core.Entities;
using FileEncryption.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Service.Services
{
    public class ServiceShare : IServiceShare
    {
        public Task<string> GetByAccessCodeAsync(string accessCode)
        {
            throw new NotImplementedException();
        }

        public Task<Share> ShareFileAsync(Share share)
        {
            throw new NotImplementedException();
        }
    }
}
