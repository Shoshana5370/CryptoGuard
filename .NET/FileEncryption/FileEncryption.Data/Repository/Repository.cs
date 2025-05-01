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
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbSet<T> _dbSet;

        public Repository(DataContext context)
        {
            _dbSet = context.Set<T>();
        }
        async public Task<T> AddAsync(T entity)
        {
            if (entity == null) return null;

            await _dbSet.AddAsync(entity); // Add user to the context
            return entity;
        }

        async public Task<bool> DeleteAsync(int id)
        {
            var entity = await _dbSet.FindAsync(id);
            if (entity == null) return false;

            _dbSet.Remove(entity); // Remove user from the context
            return true;
        }

        async public Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        async public Task<T> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id); // Find user by ID
        }

        async public Task<T> UpdateAsync(int id, T entity)
        {
            var existingEntity = await _dbSet.FindAsync(id);
            if (existingEntity == null)
                return null;
            //await _context.SaveChangesAsync();
            return existingEntity;
        }
    }
}
