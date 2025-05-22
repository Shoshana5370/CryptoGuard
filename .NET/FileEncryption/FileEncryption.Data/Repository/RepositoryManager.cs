using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Data.Repository
{
    public class RepositoryManager(DataContext context, IRepositoryUser userRepository, IRepositoryFile fileRepository, IRepositoryShare repositoryShare) : IRepositoryManager
    {
        private readonly DataContext _context = context;
        public IRepositoryUser Users { get; } = userRepository;
        public IRepositoryFile Files { get; } = fileRepository;
        public IRepositoryShare Shares { get; } = repositoryShare;

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
