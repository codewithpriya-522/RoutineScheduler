using AutoMapper;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;

namespace RMSAPI.Helper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile() 
        {
            CreateMap<RegisterDTO, AppUser>().ReverseMap();
        }
    }
}
