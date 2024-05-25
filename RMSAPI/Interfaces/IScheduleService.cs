using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using System.ComponentModel;

namespace RMSAPI.Interfaces;

public interface IScheduleService : IGenericRepository<Schedule>
{
    Task<IEnumerable<ScheduleEntryDto>> GetDailyScheduleAsync(int batchId, DayOfWeek day);
    Task<IEnumerable<ScheduleDto>> GetDepartmentWiseRoutineAsync(int departmentId);
    Task<bool> UpdateScheduleAsync(UpdateScheduleDto updateScheduleDto);
    Task<IEnumerable<ScheduleEntryDto>> GetFreeScheduleForTeacherAsync(int teacherId, int departmentId);
    Task<bool> DeleteScheduleAsync(int scheduleId);
    Task<bool> CreateScheduleAsync(CreateScheduleDto createScheduleDto);
    Task<ScheduleDto> GenerateWeeklyScheduleAsync(int batchId);
    Task AddTimeSlot(TimeSlot slot);
    Task<IEnumerable<TimeSlot>> GetAllTimeSlot();
    Task RemoveTimeSlot(int Id);
}