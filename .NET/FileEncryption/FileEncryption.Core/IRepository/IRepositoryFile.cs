using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryFile
    {
        public Task<Entities.File> AddAsync(Entities.File fileEntity);
        public Task<bool> DeleteAsync(int id);
        Task<IEnumerable<Entities.File>> GetAllAsync();
        public Task<FileEncryption.Core.Entities.File> GetByIdAsync(int fileKey);
        Task<Entities.File> UpdateAsync(int id, Entities.File fileEntity);
    }
}
