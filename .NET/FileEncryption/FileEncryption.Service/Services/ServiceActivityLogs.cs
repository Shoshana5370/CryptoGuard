using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using FileEncryption.Core.IRepository;
using FileEncryption.Core.IServices;
namespace FileEncryption.Service.Services
{
    public class ServiceActivityLogs(IRepositoryManager repository, IMapper mapper) : IServiceActivityLogs
    {
        private readonly IRepositoryManager _repository = repository;
        private readonly IMapper _mapper = mapper;

        public async Task<IEnumerable<ActivityLogDto>> GetLogsAsync()
        {
            var logs = await _repository.Logs.GetAllAsync();
            return _mapper.Map<IEnumerable<ActivityLogDto>>(logs);
        }
        public async Task<IEnumerable<ActivityLogDto>> GetLogsByUserAsync(int userId)
        {
            var logs = await _repository.Logs.GetByUserIdAsync(userId);
            return _mapper.Map<IEnumerable<ActivityLogDto>>(logs);
        }
        public async Task<ActivityLogDto?> GetLogAsync(int id)
        {
            var log = await _repository.Logs.GetByIdAsync(id);
            return log == null ? null : _mapper.Map<ActivityLogDto>(log);
        }

        public async Task LogActionAsync(CreateActivityLogDto dto)
        {
            var log = _mapper.Map<ActivityLog>(dto);
            await _repository.Logs.AddAsync(log);
            await _repository.Save();
        }
    }
}
