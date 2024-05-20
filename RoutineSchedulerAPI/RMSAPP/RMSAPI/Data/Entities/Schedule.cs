namespace RMSAPI.Data.Entities;

public class Schedule
{
    public int ScheduleId { get; set; }
    public DayOfWeek Day { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
    public int BatchId { get; set; }
    public int SubjectId { get; set; }
    public int TeacherId { get; set; }
    public int DepertmentID { get; set; }

    public Depertment Depertment { get; set; }
    public Batch Batch { get; set; }
    public Subject Subject { get; set; }
    public Teacher Teacher { get; set; }
}

