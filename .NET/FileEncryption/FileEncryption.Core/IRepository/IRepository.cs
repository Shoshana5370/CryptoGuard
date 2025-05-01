using FileEncryption.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FileEncryption.Core.IRepository
{
    public interface IRepository<T> where T:class
    {
        //Task<T> GetByIdAsync(int id);
        //Task<IEnumerable<T>> GetAllAsync();
        //Task<T> AddAsync(T entity);
        //Task<T> UpdateAsync(int id, T entity);
        //Task<bool> DeleteAsync(int id);
    }
}
