namespace RMSAPI.Controllers.DTO;

public class ScheduleDto
{
    public string BatchName { get; set; }
    public List<ScheduleEntryDto> Sunday { get; set; } = [];
    public List<ScheduleEntryDto> Monday { get; set; } = [];
    public List<ScheduleEntryDto> Tuesday { get; set; } = [];
    public List<ScheduleEntryDto> Wednesday { get; set; } = [];
    public List<ScheduleEntryDto> Thursday { get; set; } = [];
    public List<ScheduleEntryDto> Friday { get; set; } = [];
    public List<ScheduleEntryDto> Saturday { get; set; } = [];
}
