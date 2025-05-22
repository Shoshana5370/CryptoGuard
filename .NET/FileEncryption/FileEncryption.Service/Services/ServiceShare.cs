using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;

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

        public async Task<Share> GetValidShareByCodeAsync(string accessCode)
        {
            if (string.IsNullOrEmpty(accessCode))
                return null;

            var share = await _repositoryManager.Shares.GetByAccessCodeAsync(accessCode);

            if (share == null)
                return null;

            if (share.Used || share.ExpiresAt <= DateTime.UtcNow)
                return null;

            return share;
        }

        public async Task<Share> ShareFileAsync(Share share, string idUser)
        {
            var file = await _repositoryManager.Files.GetByIdFileAsync(share.FileKey) ?? throw new Exception($"File with key {share.FileKey} not found.");
            if (file.IsDelete)
            {
                throw new Exception($"File with key {share.FileKey} nis deleted.");
            }
            share.File = file;
            share.AccessCode = GenerateAccessCode;
            var recipientUser = await _repositoryManager.Users.FindByEmailAsync(share.RecipientEmail);
            if(recipientUser != null)
            {
                share.RecipientUser = recipientUser;
                share.RecipientUserId = recipientUser.Id;

            }
            int userId = int.Parse(idUser);
            share.SharedByUserId =userId;
            share.SharedByUser = await _repositoryManager.Users.GetByIdUserAsync(userId);
            _repositoryManager.Shares.AddShareAsync(share);
            await _repositoryManager.SaveAsync();
            return share;
        }

        private string GenerateAccessCode => Guid.NewGuid().ToString("N")[..8];
        public async Task<bool> ExtendExpirationAsync(int id, string newDate)
        {
            if (!DateTime.TryParse(newDate, out var parsedDate))
                return false;

            var share = await _repositoryManager.Shares.GetByIdShareAsync(id);
            if (share == null) return false;

            share.ExpiresAt = parsedDate;
            await _repositoryManager.Shares.UpdateShareAsync(id,share);
            return true;
        }

        public async Task<bool> UpdateShareAsync(Share share)
        {
            var s=await _repositoryManager.Shares.UpdateShareAsync(share.Id, share);
            if(s!=null)
            { _repositoryManager.SaveAsync();
                return true;
            }
            return false;
            

        }
    }
}
