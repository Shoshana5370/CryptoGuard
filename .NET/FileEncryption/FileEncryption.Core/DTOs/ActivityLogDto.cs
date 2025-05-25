using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.DTOs
{
    public class ActivityLogDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Action { get; set; } = string.Empty;
        public string? TargetId { get; set; }
        public string? TargetType { get; set; }
        public DateTime Timestamp { get; set; }
        public string? Description { get; set; }
    }
}
