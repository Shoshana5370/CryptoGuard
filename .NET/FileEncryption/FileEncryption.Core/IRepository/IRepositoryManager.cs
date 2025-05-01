using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryManager
    {
        IRepository<User> Users { get; }
        IRepository<Entities.File> Files { get; }
        IRepositoryShare Shares { get; }

        public async Task SaveAsync()
        {
        }
    }
}
