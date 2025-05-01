using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Data.Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private readonly DataContext _context;
        //public IRepositoryUser Users { get; }
        public IRepository<User> Users { get; }
        public IRepository<Core.Entities.File> Files { get; }

        public IRepositoryShare Shares { get; }

        public RepositoryManager(DataContext context, IRepository<User> userRepository, IRepository<Core.Entities.File> fileRepository , IRepositoryShare repositoryShare)
        {
            _context = context;
            Users = userRepository;
            Files = fileRepository;
            Shares = repositoryShare;
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
