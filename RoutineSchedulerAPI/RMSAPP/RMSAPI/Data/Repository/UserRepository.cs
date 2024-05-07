using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class UserRepository : GenericRepository<AppUser>, IUserRepository
{
    public UserRepository(DataContext context) : base(context){}
}
