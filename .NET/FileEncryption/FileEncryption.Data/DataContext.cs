using FileEncryption.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Share> Shares { get; set; }
        public DbSet<Core.Entities.File> Files { get; set; }
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Share>()
                .HasOne(fs => fs.SharedByUser)
                .WithMany() // Assuming a User can share many files
                .HasForeignKey(fs => fs.SharedByUserId)
                .OnDelete(DeleteBehavior.Cascade); // Configure delete behavior as needed

            modelBuilder.Entity<Share>()
                .HasOne(fs => fs.RecipientUser)
                .WithMany() // Assuming a User can receive many shared files
                .HasForeignKey(fs => fs.RecipientUserId)
                .OnDelete(DeleteBehavior.SetNull); // Configure delete behavior as needed
        }
    }
}
