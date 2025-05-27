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
        IRepositoryUser Users { get; }
        IRepositoryFile Files { get; }
        IRepositoryShare Shares { get; }
        IRepositoryActivityLogs Logs { get; }

        public async Task  Save()
        {
        }
    }
}
