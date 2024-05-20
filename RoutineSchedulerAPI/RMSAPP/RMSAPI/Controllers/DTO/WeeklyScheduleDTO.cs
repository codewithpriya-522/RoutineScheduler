namespace RMSAPI.Controllers.DTO;

public class WeeklyScheduleDto
{
    public string BatchName { get; set; }
    public List<DayScheduleDto> Days { get; set; } = [];
}

public class DayScheduleDto
{
    public DayOfWeek Day { get; set; }
    public List<ScheduleEntryDto> Slots { get; set; } = [];
}

