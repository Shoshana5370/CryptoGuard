using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using Microsoft.EntityFrameworkCore;
namespace FileEncryption.Data.Repository
{


        public class RepositoryShare : IRepositoryShare
        {
            private readonly DataContext _dataContext;

            public RepositoryShare(DataContext dataContext)
            {
                _dataContext = dataContext;
            }

            public async Task<Share> AddShareAsync(Share shareEntity)
            {
                if (shareEntity == null) return null;

                await _dataContext.Shares.AddAsync(shareEntity);
                return shareEntity;
            }

            public async Task<bool> DeleteShareAsync(int id)
            {
                var share = await _dataContext.Shares.FindAsync(id);
                if (share == null)
                {
                    return false;
                }

                _dataContext.Shares.Remove(share);
                return true;
            }

            public async Task<IEnumerable<Share>> GetAllSharesAsync()
            {
                return await _dataContext.Shares.ToListAsync();
            }

            public async Task<Share> GetByAccessCodeAsync(string accessCode)
            {
              if (string.IsNullOrEmpty(accessCode))
                return null;
              return await _dataContext.Shares.FirstOrDefaultAsync(s => s.AccessCode == accessCode);
            }
        public async Task<Share> GetByIdShareAsync(int shareId)
            {
                return await _dataContext.Shares
                    .FirstOrDefaultAsync(s => s.Id == shareId);
            }

            public async Task<Share> UpdateShareAsync(int id, Share shareEntity)
            {
                var existingShare = await _dataContext.Shares.FindAsync(id);
                if (existingShare == null)
                {
                    return null;
                }

                // Map fields as needed
                existingShare.FileKey = shareEntity.FileKey;
                existingShare.AccessCode = shareEntity.AccessCode;
                existingShare.ExpiresAt = shareEntity.ExpiresAt;
                existingShare.RecipientEmail = shareEntity.RecipientEmail;
                existingShare.Used = shareEntity.Used;
                // Add more fields if needed

                _dataContext.Shares.Update(existingShare);
                return existingShare;
            }
        }
}


