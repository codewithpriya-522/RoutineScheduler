using AutoMapper;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;

namespace RMSAPI.Helper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<RegisterDTO, AppUser>().
            ForMember(d => d.DateOfBirth, o => o.MapFrom(s => s.DateOfBirth.ToDateOnly("dd/MM/yyyy"))).ReverseMap();


        CreateMap<AppUser, UserDTO>()
            .ForMember(dest => dest.Roles, opt => opt.MapFrom(src => src.UserRoles.Select(ur => ur.Role.Name).ToList()))
            .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.SingleOrDefault(p => p.IsMain).Url));
        CreateMap<UserDTO, AppUser>();
    }
}
