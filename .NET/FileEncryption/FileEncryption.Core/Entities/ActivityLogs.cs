using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.Entities
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class ActivityLog
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }

        [Required]
        public string Action { get; set; } = string.Empty;

        public string? TargetId { get; set; } 
        public string? TargetType { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        public string? Description { get; set; }

        public User? User { get; set; } 
    }

}
