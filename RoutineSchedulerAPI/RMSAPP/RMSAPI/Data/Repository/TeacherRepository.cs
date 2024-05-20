using Microsoft.EntityFrameworkCore;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class TeacherRepository(DataContext context) : GenericRepository<Teacher>(context), ITeacherRepository
{
    public async Task<IEnumerable<Teacher>> GetAllAsync()
    {
        return await _context
            .Teachers
            .Include(t => t.AppUser)
            .Include(t => t.TeacherSubjects)
            .ThenInclude(ts => ts.Subject)
            .Include(p => p.Department)
            .ToListAsync();
    }
}
