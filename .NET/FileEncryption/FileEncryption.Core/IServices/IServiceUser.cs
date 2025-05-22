using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
namespace FileEncryption.Core.IServices
{
    public interface IServiceUser
    {
        Task<User> FindUserByIdAsync(int id);
        Task<IEnumerable<User>> FindAllUsersAsync();
        Task<User> InsertUserAsync(UserDto user);
        Task<User> UpdateExistingUserAsync(int id, UserDto user);
        Task<bool> DiscardUserAsync(int id);
        Task<IEnumerable<FileDto>> GetFilesByUserIdAsync(int id);
        Task<IEnumerable<ShareDto>> GetSharesToOthersAsync(int userId);
        Task<IEnumerable<ShareDto>> GetSharesWithMeAsync(int userId);
    }
}
