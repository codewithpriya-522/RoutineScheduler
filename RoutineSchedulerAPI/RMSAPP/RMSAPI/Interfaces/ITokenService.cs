using RMSAPI.Data.Entities;

namespace RMSAPI.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}
