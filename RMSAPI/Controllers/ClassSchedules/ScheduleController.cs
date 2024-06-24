using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RMSAPI.Controllers.DTO;
using RMSAPI.Data.Entities;
using RMSAPI.Extentions;
using RMSAPI.Interfaces;

namespace RMSAPI.Controllers.ClassSchedules;


public class ScheduleController(IUnitOfWork unit, IMapper mapper) : BaseAPIController(unit, mapper)
{
    [HttpGet("daily/{batchId}/{day}")]
    public async Task<IActionResult> GetDailySchedule(int batchId, DayOfWeek day)
    {
        var schedule = await _unit.Schedule.GetDailyScheduleAsync(batchId, day);
        return Ok(schedule);
    }

    [HttpGet("department/{departmentId}")]
    public async Task<IActionResult> GetDepartmentWiseRoutine(int departmentId)
    {
        var routine = await _unit.Schedule.GetDepartmentWiseRoutineAsync(departmentId);
        return Ok(routine);
    }

    [HttpPut("update")]
    public async Task<IActionResult> UpdateSchedule(UpdateScheduleDto updateScheduleDto)
    {
        var result = await _unit.Schedule.UpdateScheduleAsync(updateScheduleDto);
        if (result)
        {
            return Ok("Schedule updated successfully.");
        }

        return BadRequest("Failed to update schedule.");
    }

    [HttpGet("free/{teacherId}/{departmentId}")]
    public async Task<IActionResult> GetFreeScheduleForTeacher(int teacherId, int departmentId)
    {
        var freeSchedule = await _unit.Schedule.GetFreeScheduleForTeacherAsync(teacherId, departmentId);
        return Ok(freeSchedule);
    }

    [HttpDelete("delete/{scheduleId}")]
    public async Task<IActionResult> DeleteSchedule(int scheduleId)
    {
        var result = await _unit.Schedule.DeleteScheduleAsync(scheduleId);
        if (result)
        {
            return Ok("Schedule deleted successfully.");
        }

        return BadRequest("Failed to delete schedule.");
    }

    [HttpGet("weekly/{batchId}")]
    public async Task<IActionResult> GenerateWeeklySchedule(int batchId)
    {
        var weeklySchedule = await _unit.Schedule.GenerateWeeklyScheduleAsync(batchId);
        return Ok(weeklySchedule);
    }
    [HttpPost("Save")]
    public async Task<IActionResult> SaveSchedule(ScheduleDto data)
    {
        if (data == null) return BadRequest("Schedule data can't be null");

        //generate a save method in service class
        var batch = await _unit.Batch.GetById(data.BatchID);
        foreach (var item in data.Monday)
        {
            var schedule = new CreateScheduleDto
            {
                BatchId = data.BatchID,
                Day = DayOfWeek.Monday,
                StartTime = item.StartTime.ToTimeSpan(),
                EndTime = item.EndTime.ToTimeSpan(),
                SubjectId = Convert.ToInt32(item.SubjectId),
                TeacherId = item.TeacherId,
            };

            await _unit.Schedule.CreateScheduleAsync(schedule);
            await _unit.Complete();
        }
        foreach (var item in data.Tuesday)
        {
            var schedule = new CreateScheduleDto
            {
                BatchId = data.BatchID,
                Day = DayOfWeek.Tuesday,
                StartTime = item.StartTime.ToTimeSpan(),
                EndTime = item.EndTime.ToTimeSpan(),
                SubjectId = Convert.ToInt32(item.SubjectId),
                TeacherId = item.TeacherId,
            };

            await _unit.Schedule.CreateScheduleAsync(schedule);
            await _unit.Complete();
        }
        foreach (var item in data.Thursday)
        {
            var schedule = new CreateScheduleDto
            {
                BatchId = data.BatchID,
                Day = DayOfWeek.Thursday,
                StartTime = item.StartTime.ToTimeSpan(),
                EndTime = item.EndTime.ToTimeSpan(),
                SubjectId = Convert.ToInt32(item.SubjectId),
                TeacherId = item.TeacherId,
            };

            await _unit.Schedule.CreateScheduleAsync(schedule);
            await _unit.Complete();
        }
        foreach (var item in data.Friday)
        {
            var schedule = new CreateScheduleDto
            {
                BatchId = data.BatchID,
                Day = DayOfWeek.Friday,
                StartTime = item.StartTime.ToTimeSpan(),
                EndTime = item.EndTime.ToTimeSpan(),
                SubjectId = Convert.ToInt32(item.SubjectId),
                TeacherId = item.TeacherId,
            };

            await _unit.Schedule.CreateScheduleAsync(schedule);
            await _unit.Complete();
        }
        foreach (var item in data.Saturday)
        {
            var schedule = new CreateScheduleDto
            {
                BatchId = data.BatchID,
                Day = DayOfWeek.Saturday,
                StartTime = item.StartTime.ToTimeSpan(),
                EndTime = item.EndTime.ToTimeSpan(),
                SubjectId = Convert.ToInt32(item.SubjectId),
                TeacherId = item.TeacherId,
            };

            await _unit.Schedule.CreateScheduleAsync(schedule);
            await _unit.Complete();
        }
        foreach (var item in data.Sunday)
        {
            var schedule = new CreateScheduleDto
            {
                BatchId = data.BatchID,
                Day = DayOfWeek.Sunday,
                StartTime = item.StartTime.ToTimeSpan(),
                EndTime = item.EndTime.ToTimeSpan(),
                SubjectId = Convert.ToInt32(item.SubjectId),
                TeacherId = item.TeacherId,
            };

            await _unit.Schedule.CreateScheduleAsync(schedule);
            await _unit.Complete();
        }
        return Ok("Schedule saved successfully");
    }
    [HttpPost("timeslot")]
    public async Task<IActionResult> CreateTimeSlot([FromBody] TimeSlotDTO slot)
    {
        if (slot == null) return BadRequest("Can't insert a null timeslot");
        var timeslot = new TimeSlot()
        {
            StartTime = slot.StartTime.ToTimeSpan(),
            EndTime = slot.EndTime.ToTimeSpan(),
            TimeSlotId = slot.TimeSlotId
        };
        await _unit.Schedule.AddTimeSlot(timeslot);
        if (await _unit.Complete()) return Ok("Successfully Inserted timeslot");
        return BadRequest("Failed to insert the timeslot");
    }

    [HttpGet("timeslot")]
    public async Task<IActionResult> GetallTimeSlot()
    {
        var slots = await _unit.Schedule.GetAllTimeSlot();

        if (slots.Count() == 0) return BadRequest("No timeslot found please add one");

        return Ok(_mapper.Map<List<TimeSlotDTO>>(slots));
    }

    [HttpDelete("timeslot")]
    public async Task<IActionResult> RemoveTimeSlot(int id)
    {
        if (id == 0) return BadRequest("Please provide a correct timeslot id");

        await _unit.Schedule.RemoveTimeSlot(id);
        await _unit.Complete();
        return NoContent();
    }
}
