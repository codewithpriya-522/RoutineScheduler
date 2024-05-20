namespace RMSAPI.Controllers.DTO;

public class CreateScheduleDto
{
    public int BatchId { get; set; }
    public DayOfWeek Day { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public int SubjectId { get; set; }
    public int TeacherId { get; set; }
}