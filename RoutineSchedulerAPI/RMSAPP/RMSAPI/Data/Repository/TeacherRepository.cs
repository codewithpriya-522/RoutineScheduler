using Microsoft.EntityFrameworkCore;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class TeacherRepository : GenericRepository<Teacher>, ITeacherRepository
{
    public TeacherRepository(DataContext context) : base(context) {}

    public async Task<IEnumerable<Teacher>> GetAllAsync()
    {
        return await context
            .Teachers
            .Include(t=> t.AppUser)
            .Include(t=>t.TeacherSubjects)
            .ThenInclude(ts=> ts.Subject)
            .Include(p=> p.Department)
            .ToListAsync();
    }
}
