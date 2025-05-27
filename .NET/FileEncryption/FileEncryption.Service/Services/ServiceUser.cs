using Amazon.S3;
using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using Microsoft.Extensions.Configuration;
namespace FileEncryption.Service.Services
{
    public class ServiceUser(IRepositoryManager repositoryManager, IMapper mapper) : IServiceUser
    {
        readonly private IRepositoryManager _repositoryManager = repositoryManager;
        readonly private IMapper _mapper = mapper;

        public async Task<bool> DiscardUserAsync(int id)
        {
            bool sucsess= await _repositoryManager.Users.DeleteUserAsync(id); 
            if(sucsess)
            {
                _repositoryManager.Save();
                return true;
            }
            return false;
        }

        public async Task<IEnumerable<User>> FindAllUsersAsync()
        {
            return await _repositoryManager.Users.GetAllUserAsync();
        }

        public async Task<User> FindUserByIdAsync(int id)
        {
            return await _repositoryManager.Users.GetByIdUserAsync(id);
        }

        public async Task<IEnumerable<FileDto>> GetFilesByUserIdAsync(int id)
        {
            var files = await _repositoryManager.Users.GetFilesByUserIdAsync(id);
            return _mapper.Map<IEnumerable<FileDto>>(files);
        }
        public async Task<IEnumerable<ShareDto>> GetSharesWithMeAsync(int userId)
        {
            var shares = await _repositoryManager.Users.GetSharesWithMeAsync(userId);
            return _mapper.Map<IEnumerable<ShareDto>>(shares);
        }
        public async Task<IEnumerable<ShareDto>> GetSharesToOthersAsync(int userId)
        {
            var shares = await _repositoryManager.Users.GetSharesToOthersAsync(userId);
            return _mapper.Map<IEnumerable<ShareDto>>(shares);
        }

        public async Task<User> InsertUserAsync(UserDto user)
        {
            var userEntity = _mapper.Map<User>(user);
            await _repositoryManager.Users.AddUserAsync(userEntity); 
            _repositoryManager.Save(); 
            return userEntity;
        }

        public async Task<User> UpdateExistingUserAsync(int id, UserDto user)
        {
            User u= await _repositoryManager.Users.UpdateUserAsync(id, _mapper.Map<User>(user));
            if (u != null)
            {
                _repositoryManager.Save();
            }
            return u;
        }


    }
}
