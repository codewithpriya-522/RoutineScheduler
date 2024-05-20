using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class StudentRepository : GenericRepository<Student>, IStudentRepository
{
    public StudentRepository(DataContext context) : base(context)
    {
    }
}
