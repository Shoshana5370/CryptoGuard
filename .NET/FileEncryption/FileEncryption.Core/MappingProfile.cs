using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
namespace FileEncryption.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Entities.File, FileDto>().ReverseMap();
            CreateMap<Share, ShareDto>()
                .ForMember(dest => dest.FileName, opt => opt.MapFrom(src => src.File.Name))
                 .ForMember(dest => dest.FileIsDeleted, opt => opt.MapFrom(src => src.File.IsDelete))
                .ForMember(dest => dest.SharedByUserName, opt => opt.MapFrom(src => src.SharedByUser.Name))
                .ForMember(dest => dest.RecipientUserName, opt => opt.MapFrom(src => src.RecipientUser != null ? src.RecipientUser.Name : null));
            CreateMap<ActivityLog, ActivityLogDto>().ReverseMap();
            CreateMap<CreateActivityLogDto, ActivityLog>().ReverseMap();
        }
    }
}
