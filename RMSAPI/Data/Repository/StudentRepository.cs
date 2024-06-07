using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class StudentRepository : GenericRepository<Student>, IStudentRepository
{
    private readonly IMapper _mapper;


    public StudentRepository(DataContext context, IMapper mapper) : base(context)
    {
        _mapper = mapper;

    }

    public async Task<List<StudentDTO>> GetAllStudents()
    {
        var students = await _context.Students
        .Include(s=> s.AppUser)
        .Include(s=> s.Batch)
        .ProjectTo<StudentDTO>(_mapper.ConfigurationProvider)
        .ToListAsync();
        
        return students;
    }

}
