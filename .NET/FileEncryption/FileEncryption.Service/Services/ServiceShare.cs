using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
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
        private readonly IRepositoryManager _repositoryManager;

        public ServiceShare(IRepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
        }

        public Task<string> GetByAccessCodeAsync(string accessCode)
        {
            throw new NotImplementedException();
        }

        public Task<Share> GetValidShareByCodeAsync(string v)
        {
            throw new NotImplementedException();
        }

        public async Task<Share> ShareFileAsync(Share share)
        {
            //if (share == null)
            //    throw new ArgumentNullException(nameof(share));

            // 1️⃣ Make sure the file exists
            var file = await _repositoryManager.Files.GetByIdFileAsync(share.FileKey);
            if (file == null)
            {
                throw new Exception($"File with key {share.FileKey} not found.");
            }

            // 2️⃣ Set the navigation property (optional but good practice)
            share.File = file;

            // 3️⃣ Generate AccessCode if null or empty
            if (string.IsNullOrWhiteSpace(share.AccessCode))
            {
                share.AccessCode = GenerateAccessCode();
            }

            // 4️⃣ Save to DB
            _repositoryManager.Shares.AddShareAsync(share);
            await _repositoryManager.SaveAsync();
            return share;
        }

        // Simple method to generate random access code
        private string GenerateAccessCode()
        {
            return Guid.NewGuid().ToString("N").Substring(0, 8);  // Example: 8-char code
        }

    }
}
