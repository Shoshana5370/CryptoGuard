using Amazon.S3;
using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Service.Services
{
    public class ServiceUser : IServiceUser
    {
        readonly private IRepositoryManager _repositoryManager;
        readonly private IMapper _mapper;
        private readonly IAmazonS3 _s3Client;
        private readonly IConfiguration _config;

        public ServiceUser(IRepositoryManager repositoryManager ,IMapper mapper)
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
        }


        public async Task<bool> DiscardUserAsync(int id)
        {
            bool sucsess= await _repositoryManager.Users.DeleteAsync(id); // Call repository method to delete user
            if(sucsess)
            {
                await _repositoryManager.SaveAsync();
                return true;
            }
            return false;
        }

        public async Task<IEnumerable<User>> FindAllUsersAsync()
        {
            return await _repositoryManager.Users.GetAllAsync(); // Call repository method to get all users
        }

        public async Task<User> FindUserByIdAsync(int id)
        {
            return await _repositoryManager.Users.GetByIdAsync(id); // Call repository method to find user by ID
        }

        public async Task<User> InsertUserAsync(UserDto user)
        {
            var userEntity = _mapper.Map<User>(user); // ממפה את ה-DTO לישות
            await _repositoryManager.Users.AddAsync(userEntity); // קורא לשיטה להוספת משתמש
            await _repositoryManager.SaveAsync(); // שומר את השינויים בבסיס הנתונים
            return userEntity;
        }

        public async Task<User> UpdateExistingUserAsync(int id, UserDto user)
        {
            User u= await _repositoryManager.Users.UpdateAsync(id, _mapper.Map<User>(user));
            if (u != null)
            {
                await _repositoryManager.SaveAsync();
            }
            return u;
            // Call repository method to update user
        }
    }
}
