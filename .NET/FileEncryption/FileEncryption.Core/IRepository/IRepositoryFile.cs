using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryFile
    {
        public Task<Entities.File> AddFileAsync(Entities.File fileEntity);
        public Task<bool> DeleteFileAsync(int id);
        Task<IEnumerable<Entities.File>> GetAllFileAsync();
        public Task<FileEncryption.Core.Entities.File> GetByIdFileAsync(int fileKey);
        Task<Entities.File> UpdateFileAsync(int id, Entities.File fileEntity);
    }
}
