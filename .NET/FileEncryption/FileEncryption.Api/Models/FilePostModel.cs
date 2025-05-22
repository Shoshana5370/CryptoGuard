using FileEncryption.Core.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace FileEncryption.Api.Models
{
    public class FilePostModel
    {
        public string Name { get; set; }
        public int CreatedBy { get; set; }
        public bool IsDelete { get; set; }

    }
}
