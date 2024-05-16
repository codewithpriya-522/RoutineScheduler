namespace RMSAPI.Controllers.DTO;

public class TeacherDataDTO
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    public int Id { get; set; }
    /// <summary>
    /// The user's first name.
    /// </summary>
    /// <value>John</value>
    public string FirstName { get; set; }

    /// <summary>
    /// The App users last name.
    /// </summary>
    /// <value>Doe</value>
    public string LastName { get; set; }
    public string DepertmentName { get; set; }
    public int DepertmentID { get; set; }
    public string Email { get; set; }
    /// <summary>
    /// Gets or sets the teacher subjects.
    /// </summary>
    /// <value>
    /// The teacher subjects.
    /// </value>
    public virtual ICollection<string> Subjects { get; set; }

}
