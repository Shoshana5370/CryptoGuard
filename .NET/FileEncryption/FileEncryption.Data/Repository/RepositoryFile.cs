using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Data.Repository
{
    public class RepositoryFile : IRepositoryFile
    {
        public Task<bool> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task GetByIdAsync(int fileKey)
        {
            throw new NotImplementedException();
        }

        Task<Core.Entities.File> IRepositoryFile.GetByIdAsync(int fileKey)
        {
            throw new NotImplementedException();
        }
    }
}
