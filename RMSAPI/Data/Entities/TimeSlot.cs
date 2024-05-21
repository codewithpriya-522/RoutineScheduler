namespace RMSAPI.Data.Entities;

public class TimeSlot
{
    public int TimeSlotId { get; set; }
    public TimeSpan StartTime { get; set; }
    public TimeSpan EndTime { get; set; }
}
