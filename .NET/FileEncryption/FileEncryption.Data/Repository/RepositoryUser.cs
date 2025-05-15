using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using Microsoft.EntityFrameworkCore;
namespace FileEncryption.Data.Repository
{
    public class RepositoryUser : IRepositoryUser
    {
        private readonly DataContext _context;

        public RepositoryUser(DataContext data)
        {
            _context = data;
        }
        public async Task<User> AddUserAsync(User user)
        {
            if (user == null) return null;

            await _context.Users.AddAsync(user); // Add user to the context
            return user; // Save changes and return success
        }

        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null) return false;

            _context.Users.Remove(user); // Remove user from the context
            return await _context.SaveChangesAsync() > 0; // Save changes and return success
        }

        public async Task<User> FindByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            
        }

        public async Task<IEnumerable<User>> GetAllUserAsync()
        {
            return await _context.Users.ToListAsync(); // Return all users as a list
        }

        public async Task<User> GetByIdUserAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<IEnumerable<Core.Entities.File>> GetFilesByUserIdAsync(int id)
        {
            var user = await _context.Users
                      .Include(u => u.Files) // Ensure that Files are included in the query
                       .FirstOrDefaultAsync(u => u.Id == id);
            if (user != null)
            {
                return user.Files; // This will work since Files is already loaded
            }
            return null; // Return an empty list if user is not found
        }
        public async Task<IEnumerable<Core.Entities.Share>> GetSharesWithMeAsync(int userId)
        {
            var user = await _context.Users
                .Include(u => u.SharesWithMe) // assuming this is the navigation property
                .ThenInclude(s => s.File) // if each Share includes a reference to the File entity
                .FirstOrDefaultAsync(u => u.Id == userId);

            if (user != null)
            {
                return user.SharesWithMe; // assuming this is a collection of Share entities
            }

            return null;
        }
        public async Task<IEnumerable<Share>> GetSharesToOthersAsync(int userId)
        {
            return await _context.Shares
                .Include(s => s.File)
                .Include(s => s.RecipientUser)
                .Where(s => s.SharedByUserId== userId)
                .ToListAsync();
        }


        public async Task<User> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id); // Find user by ID
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
