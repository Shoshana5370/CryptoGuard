using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServiceRole
    {
        Task<Role> FindRoleByIdAsync(int id);
        Task<IEnumerable<Role>> FindAllRolesAsync();
        Task<Role> InsertRoleAsync(Role role);
    }
}
