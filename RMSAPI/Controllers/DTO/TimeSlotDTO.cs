using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO;

public class TimeSlotDTO
{
    public int TimeSlotId { get; set; }
    /// <summary>
    /// Gets or sets the start time.
    /// the format needed here is hh:mm if use 24hr format 
    /// else if we use 12 hr format hh:mm tt 
    /// </summary>
    /// <value>
    /// The start time.
    /// </value>
    [DefaultValue("10:00")]
    public string StartTime { get; set; }

    /// <summary>
    /// Gets or sets the end time.
    /// the format needed here is hh:mm if use 24hr format 
    /// else if we use 12 hr format hh:mm tt 
    /// </summary>
    /// <value>
    /// The start time.
    /// </value>
    [DefaultValue("11:00")]
    public string EndTime { get; set; }
}
