using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{
    public interface IServicePermission
    {
        Task<Permission> FindPermissionByIdAsync(int id);
        Task<IEnumerable<Permission>> FindAllPermissionsAsync();
        Task<Permission> InsertPermissionAsync(Permission permission);
    }
}
