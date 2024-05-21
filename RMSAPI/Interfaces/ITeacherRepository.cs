using RMSAPI.Data.Entities;

namespace RMSAPI.Interfaces;

public interface ITeacherRepository : IGenericRepository<Teacher>
{
    Task<IEnumerable<Teacher>> GetAllAsync();
}
