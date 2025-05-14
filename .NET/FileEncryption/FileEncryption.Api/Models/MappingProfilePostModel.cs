using AutoMapper;
using FileEncryption.Core.DTOs;
using FileEncryption.Core.Entities;
using System.Security.Claims;

namespace FileEncryption.Api.Models
{
    public class MappingProfilePostModel:Profile
    {
        public MappingProfilePostModel()
        {
            CreateMap<UserPostModel, UserDto>().ReverseMap();
            CreateMap<LoginModel, UserDto>().ReverseMap();
            CreateMap<FilePostModel, FileDto>().ReverseMap();
            CreateMap<SharePostModel, Share>()
            .ForMember(dest => dest.RecipientUserId, opt => opt.Ignore());
        }

    }
}
