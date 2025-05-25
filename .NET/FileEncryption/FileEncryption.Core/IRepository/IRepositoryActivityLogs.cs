using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepositoryActivityLogs
    {
            Task<IEnumerable<ActivityLog>> GetAllAsync();
            Task<ActivityLog?> GetByIdAsync(int id);
            Task<IEnumerable<ActivityLog>> GetByUserIdAsync(int userId);
            Task AddAsync(ActivityLog log);
            Task DeleteAsync(int id);

    }
}
