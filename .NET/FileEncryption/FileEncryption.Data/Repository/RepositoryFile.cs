using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Data.Repository
{
    public class RepositoryFile : IRepositoryFile
    {
        private readonly DataContext _dataContext;

        public RepositoryFile(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public async Task<Core.Entities.File> AddAsync(Core.Entities.File fileEntity)
        {
            if (fileEntity == null) return null;

            await _dataContext.Files.AddAsync(fileEntity); 
            return fileEntity; 
        }

        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Core.Entities.File>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task GetByIdAsync(int fileKey)
        {
            throw new NotImplementedException();
        }

        public Task<Core.Entities.File> UpdateAsync(int id, Core.Entities.File fileEntity)
        {
            throw new NotImplementedException();
        }

        Task<Core.Entities.File> IRepositoryFile.GetByIdAsync(int fileKey)
        {
            throw new NotImplementedException();
        }
    }
}
