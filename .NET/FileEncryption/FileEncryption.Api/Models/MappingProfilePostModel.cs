using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;

namespace FileEncryption.Api.Models
{
    public class MappingProfilePostModel:Profile
    {
        public MappingProfilePostModel()
        {
            CreateMap<UserPostModel, UserDto>().ReverseMap();
            CreateMap<LoginModel, UserDto>().ReverseMap();
            CreateMap<FilePostModel, FileDto>().ReverseMap();
            CreateMap<SharePostModel, Share>().ReverseMap();
        }

    }
}
