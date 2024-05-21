namespace RMSAPI.Data.Entities;

public class Routine
{
    public int RoutineId { get; set; }
    public int BatchId { get; set; }
    public ICollection<Schedule> Schedules { get; set; }

    public Batch Batch { get; set; }
}
