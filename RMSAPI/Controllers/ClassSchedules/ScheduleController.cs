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
