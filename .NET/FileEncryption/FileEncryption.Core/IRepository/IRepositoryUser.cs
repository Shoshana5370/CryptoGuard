using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryUser 
    {
        public Task<User> AddUserAsync(User user);
        public Task<bool> DeleteUserAsync(int id);
        public Task<User> FindByEmailAsync(string email);
        public Task<IEnumerable<User>> GetAllUserAsync();
        public Task<User> GetByIdUserAsync(int id);
        public Task<User> UpdateUserAsync(int id, User user);
        public Task<IEnumerable<FileEncryption.Core.Entities.File>> GetFilesByUserIdAsync(int id);
        public Task<IEnumerable<Share>> GetSharesToOthersAsync(int userId);
        public Task<IEnumerable<Share>> GetSharesWithMeAsync(int userId);

    }
}
