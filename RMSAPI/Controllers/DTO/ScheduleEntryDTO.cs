namespace RMSAPI.Controllers.DTO;

public class ScheduleEntryDto
{
    public string SubjectId { get; set; }
    public string SubjectName { get; set; }
    public string SubjectType { get; set; }
    public string TeacherName { get; set; }
    public int TeacherId { get; set; }
    public string StartTime { get; set; }
    public string EndTime { get; set; }
}
