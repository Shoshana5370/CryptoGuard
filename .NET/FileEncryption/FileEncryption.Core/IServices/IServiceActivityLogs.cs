using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IServices
{

        public interface IServiceActivityLogs
        {
            Task<IEnumerable<ActivityLogDto>> GetLogsAsync();
            Task<IEnumerable<ActivityLogDto>> GetLogsByUserAsync(int userId);
            Task<ActivityLogDto?> GetLogAsync(int id);
            Task LogActionAsync(CreateActivityLogDto dto);
        }

    
}
