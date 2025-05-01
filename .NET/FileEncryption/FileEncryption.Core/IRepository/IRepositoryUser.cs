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
        public Task<bool> DeleteAsync(int id);
        public Task<User> FindByEmailAsync(string email);
        public Task<IEnumerable<User>> GetAllAsync();
        public Task<User> GetByIdAsync(int id);
        public Task<User> UpdateAsync(int id, User user);

        //Task<User> GetUserByIdAsync(int id);
        //Task<IEnumerable<User>> GetAllUsersAsync();
        //Task<User> AddUserAsync(User user);
        //Task<User> UpdateUserAsync(int id,User user);
        //Task<bool> DeleteUserAsync(int id);

    }
}
