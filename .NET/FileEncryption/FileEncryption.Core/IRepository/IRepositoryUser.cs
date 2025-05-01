using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryUser : IRepository<User>
    {
        Task<UserDto> FindByEmailAsync(string email);

        //Task<User> GetUserByIdAsync(int id);
        //Task<IEnumerable<User>> GetAllUsersAsync();
        //Task<User> AddUserAsync(User user);
        //Task<User> UpdateUserAsync(int id,User user);
        //Task<bool> DeleteUserAsync(int id);

    }
}
