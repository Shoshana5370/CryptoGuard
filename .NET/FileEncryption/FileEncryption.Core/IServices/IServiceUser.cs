using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceUser
    {
        Task<User> FindUserByIdAsync(int id);
        Task<IEnumerable<User>> FindAllUsersAsync();
        Task<User> InsertUserAsync(UserDto user);
        Task<User> UpdateExistingUserAsync(int id, UserDto user);
        Task<bool> DiscardUserAsync(int id);
    }
}
