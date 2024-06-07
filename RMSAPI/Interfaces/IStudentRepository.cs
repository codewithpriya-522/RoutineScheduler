using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;

namespace RMSAPI.Interfaces;

public interface IStudentRepository : IGenericRepository<Student>
{
    Task<List<StudentDTO>> GetAllStudents();
}
