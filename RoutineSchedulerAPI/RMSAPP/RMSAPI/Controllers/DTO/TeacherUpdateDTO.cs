using System.ComponentModel;

namespace RMSAPI.Controllers.DTO;

public class TeacherUpdateDataDTO
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    [DefaultValue(1)]
    public int Id { get; set; }
    /// <summary>
    /// Teachers depertment id like computer science is 1 
    /// </summary>
    [DefaultValue(1)]
    public int DepertmentID { get; set; }

    /// <summary>
    /// Gets or sets the teacher subjects.
    /// </summary>
    /// <value>
    /// The teacher subjects.
    /// </value>
    public virtual ICollection<string> Subjects { get; set; }

}
