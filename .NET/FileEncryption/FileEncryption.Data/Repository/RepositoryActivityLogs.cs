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
    public class RepositoryActivityLogs : IRepositoryActivityLogs
    {
        private readonly DataContext _context;
        public RepositoryActivityLogs(DataContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ActivityLog>> GetAllAsync() => await _context.ActivityLogs.ToListAsync();

        public async Task<ActivityLog?> GetByIdAsync(int id) => await _context.ActivityLogs.FindAsync(id);

        public async Task<IEnumerable<ActivityLog>> GetByUserIdAsync(int userId) =>
            await _context.ActivityLogs.Where(log => log.UserId == userId).ToListAsync();

        public async Task AddAsync(ActivityLog log)
        {
            await _context.ActivityLogs.AddAsync(log);
        }

        public async Task DeleteAsync(int id)
        {
            var log = await _context.ActivityLogs.FindAsync(id);
            if (log != null)
            {
                _context.ActivityLogs.Remove(log);
            }
        }
    }
}
