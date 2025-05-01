using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
namespace FileEncryption.Core
{
    public class MappingProfile :Profile
    {
        public MappingProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<Entities.File, FileDto>().ReverseMap();
        }
    }
}
