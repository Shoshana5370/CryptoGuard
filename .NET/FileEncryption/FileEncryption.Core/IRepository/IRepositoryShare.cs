using FileEncryption.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryShare
    {
        Task<Share> AddShareAsync(Share shareEntity);
        Task<bool> DeleteShareAsync(int id);
        Task<IEnumerable<Share>> GetAllSharesAsync();
        Task<Share> GetByAccessCodeAsync(string accessCode);
        Task<Share> GetByIdShareAsync(int shareId);
        Task<Share> UpdateShareAsync(int id, Share shareEntity);
    }
}

