using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Helper;
using RMSAPI.Interfaces;

namespace RMSAPI.Data.Repository;

public class ScheduleService(DataContext context) : GenericRepository<Schedule>(context), IScheduleService
{
    public async Task AddTimeSlot(TimeSlot slot)
    {
        if (!await _context.TimeSlots.AnyAsync(s => s.StartTime == slot.StartTime && s.EndTime == slot.EndTime))
            await _context.TimeSlots.AddAsync(slot);
    }

    public async Task<bool> CreateScheduleAsync(CreateScheduleDto createScheduleDto)
    {
        // Check for conflicts
        var conflictingSchedule = await _context.Schedules
            .Where(s => s.TeacherId == createScheduleDto.TeacherId &&
                        s.Day == createScheduleDto.Day &&
                        s.StartTime < createScheduleDto.EndTime &&
                        s.EndTime > createScheduleDto.StartTime)
            .FirstOrDefaultAsync();

        if (conflictingSchedule != null)
        {
            return false; // Conflict detected, cannot create schedule
        }

        var newSchedule = new Schedule
        {
            BatchId = createScheduleDto.BatchId,
            Day = createScheduleDto.Day,
            StartTime = createScheduleDto.StartTime,
            EndTime = createScheduleDto.EndTime,
            SubjectId = createScheduleDto.SubjectId,
            TeacherId = createScheduleDto.TeacherId
        };
        // Adding forgain keys

        var batch = await _context.Batches.Include(b=> b.Department).SingleOrDefaultAsync(b => b.Id == createScheduleDto.BatchId);
        var teacher = await _context.Teachers.SingleOrDefaultAsync(t => t.Id == createScheduleDto.TeacherId);
        var subject = await _context.Subjects.SingleOrDefaultAsync(s => s.Id == createScheduleDto.SubjectId);
      
        newSchedule.Teacher = teacher;
        newSchedule.Batch = batch;
        newSchedule.Subject = subject;
        newSchedule.Depertment = batch.Department;
        newSchedule.DepertmentID = batch.DepartmentId;
        _context.Schedules.Add(newSchedule);

        return true;
    }

    public async Task<bool> DeleteScheduleAsync(int scheduleId)
    {
        var schedule = await _context.Schedules.FindAsync(scheduleId);
        if (schedule == null)
        {
            return false;
        }

        _context.Schedules.Remove(schedule);
        await _context.SaveChangesAsync();

        return true;
    }

    public async Task<ScheduleDto> GenerateWeeklyScheduleAsync(int batchId)
    {
        /*
        var batch = await _context.Batches.FindAsync(batchId);
        var timeSlots = await _context.TimeSlots.OrderBy(ts => ts.StartTime).ToListAsync();
        var teachers = await _context.Teachers
            .Include(t => t.TeacherSubjects)
            .ThenInclude(t => t.Subject)
            .Include(t => t.AppUser)
            .ToListAsync();
        var subjects = await _context.Subjects.ToListAsync();

        var weeklySchedule = new WeeklyScheduleDto
        {
            BatchName = batch.Name,
            Days = []
        };

        var random = new Random();

        foreach (DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
        {
            var daySchedule = new DayScheduleDto
            {
                Day = day,
                Slots = []
            };

            foreach (var slot in timeSlots)
            {
                // Randomly select a teacher
                var randomTeacher = teachers[random.Next(teachers.Count)];
                // Randomly select one of the teacher's subjects
                var randomSubject = randomTeacher.TeacherSubjects.ElementAt(random.Next(randomTeacher.TeacherSubjects.Count)).Subject;

                // Create schedule entry
                var scheduleEntry = new ScheduleEntryDto
                {
                    SubjectId = randomSubject.Id.ToString(),
                    SubjectName = randomSubject.Name,
                    SubjectType = randomSubject.Type.ToString(),
                    TeacherName = Utilities.GetFullName(randomTeacher.AppUser.FirstName, randomTeacher.AppUser.LastName),
                    TeacherId = randomTeacher.Id,
                    StartTime = slot.StartTime.ToString(@"hh\:mm"),
                    EndTime = slot.EndTime.ToString(@"hh\:mm")
                };

                // Check for conflicts
                var conflictingSchedule = await _context.Schedules
                    .Where(s => s.TeacherId == randomTeacher.Id &&
                                s.Day == day &&
                                s.StartTime < slot.EndTime &&
                                s.EndTime > slot.StartTime)
                    .FirstOrDefaultAsync();

                if (conflictingSchedule == null)
                {
                    // Save to database
                    var newSchedule = new Schedule
                    {
                        BatchId = batchId,
                        Day = day,
                        StartTime = slot.StartTime,
                        EndTime = slot.EndTime,
                        SubjectId = randomSubject.Id,
                        TeacherId = randomTeacher.Id
                    };

                    _context.Schedules.Add(newSchedule);

                    daySchedule.Slots.Add(scheduleEntry);
                }
            }

            weeklySchedule.Days.Add(daySchedule);
        }

        return weeklySchedule;
        */
        var batch = await _context.Batches.FindAsync(batchId);
        var timeSlots = await _context.TimeSlots.OrderBy(ts => ts.StartTime).ToListAsync();
        var teachers = await _context.Teachers
            .Include(t => t.TeacherSubjects)
            .ThenInclude(t => t.Subject)
            .Include(t => t.AppUser)
            .ToListAsync();

        var scheduleDto = new ScheduleDto
        {
            BatchID = batchId,
            BatchName = batch?.Name,
            Sunday = [],
            Monday = [],
            Tuesday = [],
            Wednesday = [],
            Thursday = [],
            Friday = [],
            Saturday = []
        };

        var random = new Random();

        foreach (DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
        {
            foreach (var slot in timeSlots)
            {
                GetRandomTeacher:
                    int randomTeacherIndex = random.Next(teachers.Count);
                // Randomly select a teacher
                var randomTeacher = teachers[randomTeacherIndex];
                int randomSubjectIndex = 0;
                if(randomTeacher.TeacherSubjects.Count > 0)
                    randomSubjectIndex = random.Next(randomTeacher.TeacherSubjects.Count);
                if(randomSubjectIndex  == 0)
                    goto GetRandomTeacher;
                // Randomly select one of the teacher's subjects
                var randomSubject = randomTeacher.TeacherSubjects.ElementAt(randomSubjectIndex).Subject;

                // Create schedule entry
                var scheduleEntry = new ScheduleEntryDto
                {
                    SubjectId = randomSubject.Id.ToString(),
                    SubjectName = randomSubject.Name,
                    SubjectType = randomSubject.Type.ToString(),
                    TeacherName = Utilities.GetFullName(randomTeacher.AppUser.FirstName, randomTeacher.AppUser.LastName),
                    TeacherId = randomTeacher.Id,
                    StartTime = slot.StartTime.ToString(@"hh\:mm"),
                    EndTime = slot.EndTime.ToString(@"hh\:mm")
                };

                // Check for conflicts
                var conflictingSchedule = await _context.Schedules
                    .Where(s => s.TeacherId == randomTeacher.Id &&
                                s.Day == day &&
                                s.StartTime < slot.EndTime &&
                                s.EndTime > slot.StartTime)
                    .FirstOrDefaultAsync();

                if (conflictingSchedule == null)
                {
                    // Save to database
                    var newSchedule = new Schedule
                    {
                        BatchId = batchId,
                        Day = day,
                        StartTime = slot.StartTime,
                        EndTime = slot.EndTime,
                        SubjectId = randomSubject.Id,
                        TeacherId = randomTeacher.Id
                    };

                    _context.Schedules.Add(newSchedule);
                    //await _context.SaveChangesAsync();

                    // Add to the correct day in the DTO
                    switch (day)
                    {
                        case DayOfWeek.Sunday:
                            scheduleDto.Sunday.Add(scheduleEntry);
                            break;
                        case DayOfWeek.Monday:
                            scheduleDto.Monday.Add(scheduleEntry);
                            break;
                        case DayOfWeek.Tuesday:
                            scheduleDto.Tuesday.Add(scheduleEntry);
                            break;
                        case DayOfWeek.Wednesday:
                            scheduleDto.Wednesday.Add(scheduleEntry);
                            break;
                        case DayOfWeek.Thursday:
                            scheduleDto.Thursday.Add(scheduleEntry);
                            break;
                        case DayOfWeek.Friday:
                            scheduleDto.Friday.Add(scheduleEntry);
                            break;
                        case DayOfWeek.Saturday:
                            scheduleDto.Saturday.Add(scheduleEntry);
                            break;
                    }
                }
            }
        }

        return scheduleDto;
    }


    public async Task<IEnumerable<TimeSlot>> GetAllTimeSlot()
    {
        return await _context.TimeSlots.ToListAsync();
    }

    public async Task<IEnumerable<ScheduleEntryDto>> GetDailyScheduleAsync(int batchId, DayOfWeek day)
    {
        var schedules = await _context.Schedules
            .Include(s => s.Subject)
            .Include(s => s.Teacher)
            .Include(s=> s.Teacher)
            .ThenInclude(s=> s.AppUser)
            .Where(s => s.BatchId == batchId && s.Day == day)
            .ToListAsync();

        return schedules.Select(s => new ScheduleEntryDto
        {
            SubjectId = s.Subject.Id.ToString(),
            SubjectName = s.Subject.Name,
            SubjectType = s.Subject.Type.ToString(),
            TeacherName = Utilities.GetFullName(s.Teacher.AppUser.FirstName, s.Teacher.AppUser.LastName),
            TeacherId = s.Teacher.Id,
            StartTime = s.StartTime.ToString(@"hh\:mm"),
            EndTime = s.EndTime.ToString(@"hh\:mm")
        });
    }

    public async Task<IEnumerable<ScheduleDto>> GetDepartmentWiseRoutineAsync(int departmentId)
    {
        var batches = await _context.Batches
          .Where(b => b.DepartmentId == departmentId)
          .ToListAsync();

        var result = new List<ScheduleDto>();

        foreach (var batch in batches)
        {
            var scheduleDto = new ScheduleDto
            {
                BatchName = batch.Name
            };

            var schedules = await _context.Schedules
                .Include(s => s.Subject)
                .Include(s => s.Teacher)
                .ThenInclude(s=> s.AppUser)
                .Where(s => s.BatchId == batch.Id)
                .ToListAsync();

            foreach (var s in schedules)
            {
                var scheduleEntryDto = new ScheduleEntryDto
                {
                    SubjectId = s.Subject.Id.ToString(),
                    SubjectName = s.Subject.Name,
                    SubjectType = s.Subject.Type.ToString(),
                    TeacherName = Utilities.GetFullName(s.Teacher.AppUser.FirstName, s.Teacher.AppUser.LastName),
                    TeacherId = s.Teacher.Id,
                    StartTime = s.StartTime.ToString(@"hh\:mm"),
                    EndTime = s.EndTime.ToString(@"hh\:mm")
                };

                switch (s.Day)
                {
                    case DayOfWeek.Sunday:
                        scheduleDto.Sunday.Add(scheduleEntryDto);
                        break;
                    case DayOfWeek.Monday:
                        scheduleDto.Monday.Add(scheduleEntryDto);
                        break;
                    case DayOfWeek.Tuesday:
                        scheduleDto.Tuesday.Add(scheduleEntryDto);
                        break;
                    case DayOfWeek.Wednesday:
                        scheduleDto.Wednesday.Add(scheduleEntryDto);
                        break;
                    case DayOfWeek.Thursday:
                        scheduleDto.Thursday.Add(scheduleEntryDto);
                        break;
                    case DayOfWeek.Friday:
                        scheduleDto.Friday.Add(scheduleEntryDto);
                        break;
                    case DayOfWeek.Saturday:
                        scheduleDto.Saturday.Add(scheduleEntryDto);
                        break;
                }
            }

            result.Add(scheduleDto);
        }

        return result;
    }

    public async Task<IEnumerable<ScheduleEntryDto>> GetFreeScheduleForTeacherAsync(int teacherId, int departmentId)
    {
        var teacherSchedules = await _context.Schedules
            .Where(s => s.TeacherId == teacherId)
            .ToListAsync();

        var allSlots = new List<ScheduleEntryDto>();
        var timeSlots = await _context.TimeSlots.OrderBy(ts => ts.StartTime).ToListAsync();

        foreach (DayOfWeek day in Enum.GetValues(typeof(DayOfWeek)))
        {
            foreach (var slot in timeSlots)
            {
                var isFree = !teacherSchedules.Any(s => s.Day == day && s.StartTime == slot.StartTime && s.EndTime == slot.EndTime);

                if (isFree)
                {
                    allSlots.Add(new ScheduleEntryDto
                    {
                        TeacherId = teacherId,
                        StartTime = slot.StartTime.ToString(@"hh\:mm"),
                        EndTime = slot.EndTime.ToString(@"hh\:mm"),
                        SubjectId = null, // No subject as it's a free slot
                        SubjectName = null,
                        SubjectType = null,
                        TeacherName = null // No teacher name as it's a free slot
                    });
                }
            }
        }

        return allSlots;
    }

    public async Task RemoveTimeSlot(int Id)
    {
        var slot = await _context.TimeSlots.Where(p => p.TimeSlotId == Id).FirstOrDefaultAsync();
        if (slot != null)
            _context.TimeSlots.Remove(slot);
    }

    public async Task<bool> UpdateScheduleAsync(UpdateScheduleDto updateScheduleDto)
    {
        var schedule = await _context.Schedules.FindAsync(updateScheduleDto.ScheduleId);
        if (schedule == null)
        {
            return false;
        }

        schedule.Day = updateScheduleDto.Day;
        schedule.StartTime = updateScheduleDto.StartTime;
        schedule.EndTime = updateScheduleDto.EndTime;
        schedule.SubjectId = updateScheduleDto.SubjectId;
        schedule.TeacherId = updateScheduleDto.TeacherId;

        await _context.SaveChangesAsync();
        return true;
    }
}
