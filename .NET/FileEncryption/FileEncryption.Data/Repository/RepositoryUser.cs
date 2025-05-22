using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using Microsoft.EntityFrameworkCore;
namespace FileEncryption.Data.Repository
{
    public class RepositoryUser(DataContext data) : IRepositoryUser
    {
        private readonly DataContext _context = data;

        public async Task<User> AddUserAsync(User user)
        {
            if (user == null) return null;

            await _context.Users.AddAsync(user);
            return user;
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return false;

            _context.Users.Remove(user); 
            return await _context.SaveChangesAsync() > 0; 
        }

        public async Task<User> FindByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            
        }

        public async Task<IEnumerable<User>> GetAllUserAsync()
        {
            return await _context.Users.ToListAsync(); 
        }

        public async Task<User> GetByIdUserAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<IEnumerable<Core.Entities.File>> GetFilesByUserIdAsync(int id)
        {
            var files = await _context.Files
               .Where(f => f.CreatedBy == id && !f.IsDelete)
                  .ToListAsync();

            return files;
        }
        public async Task<IEnumerable<Share>> GetSharesWithMeAsync(int userId)
        {
            var shares = await _context.Shares
                .Where(s => s.RecipientUserId == userId)
                .Include(s => s.File)
                .Include(s => s.SharedByUser)
                .ToListAsync();

            return shares;
        }

        public async Task<IEnumerable<Share>> GetSharesToOthersAsync(int userId)
        {
            var shares = await _context.Shares
               .Where(s => s.SharedByUserId == userId)
               .Include(s => s.File)
               .Include(s => s.RecipientUser)
               .ToListAsync();
            return shares;
        }


        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id); 
        }
        public async Task<User> UpdateUserAsync(int id,User user)
        {
            var existingUser = await _context.Users.FindAsync(id);
            if (existingUser == null)
                return null;
            await _context.SaveChangesAsync();
            return existingUser;
        }

    }
}
