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
    }
}
