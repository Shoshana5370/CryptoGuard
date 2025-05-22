using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FileEncryption.Data.Repository
{
    public class RepositoryFile(DataContext dataContext) : IRepositoryFile
    {
        private readonly DataContext _dataContext = dataContext;

        public async Task<Core.Entities.File> AddFileAsync(Core.Entities.File fileEntity)
        {
            if (fileEntity == null) return null;
            await _dataContext.Files.AddAsync(fileEntity);
            return fileEntity;
        }

        public async Task<bool> DeleteFileAsync(int id)
        {
            var file = await _dataContext.Files.FindAsync(id);
            if (file == null)
            {
                return false;
            }
            file.IsDelete = true;
            _dataContext.Files.Update(file);
            return true;
        }

        public async Task<IEnumerable<Core.Entities.File>> GetAllFileAsync()
        {
            return await _dataContext.Files.ToListAsync();
        }

        public async Task<Core.Entities.File> GetByIdFileAsync(int fileKey)
        {
            return await _dataContext.Files
                .FirstOrDefaultAsync(f => f.Id == fileKey);
        }

        public async Task<Core.Entities.File> UpdateFileAsync(int id, Core.Entities.File fileEntity)
        {
            var existingFile = await _dataContext.Files.FindAsync(id);
            if (existingFile == null)
            {
                return null;
            }
            existingFile.Name = fileEntity.Name;
            existingFile.UpdatedAt = DateTime.Now;
            _dataContext.Files.Update(existingFile);
            return existingFile;
        }
    }
}
