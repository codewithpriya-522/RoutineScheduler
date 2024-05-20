namespace RMSAPI.Controllers.DTO;

public class UpdateScheduleDto
{
    public int ScheduleId { get; set; }
    public int BatchId { get; set; }
    public DayOfWeek Day { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public int SubjectId { get; set; }
    public int TeacherId { get; set; }
}
