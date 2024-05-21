namespace RMSAPI.Controllers.DTO;

public class BatchDataDTO
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    public int Id { get; set; }
    /// <summary>
    /// Gets or sets the name.
    /// </summary>
    /// <value>
    /// The name.
    /// </value>
    public string Name { get; set; }
    /// <summary>
    /// Gets or sets the start date.
    /// </summary>
    /// <value>
    /// The start date.
    /// </value>
    public DateTime StartDate { get; set; }
    /// <summary>
    /// Gets or sets the end date.
    /// </summary>
    /// <value>
    /// The end date.
    /// </value>
    public DateTime EndDate { get; set; }
    /// <summary>
    /// Gets or sets the department identifier.
    /// </summary>
    /// <value>
    /// The department identifier.
    /// </value>
    public int DepartmentId { get; set; }

    /// <summary>
    /// Gets or sets the batch subjects.
    /// </summary>
    /// <value>
    /// The batch subjects.
    /// </value>
    public virtual ICollection<string> BatchSubjects { get; set; }
    /// <summary>
    /// Gets or sets the batch students.
    /// </summary>
    /// <value>
    /// The batch students.
    /// </value>
    public int BatchStudents { get; set; }
    /// <summary>
    /// Student ids for this batch
    /// </summary>
    public List<int> BatchStudentIds { get; set; }
}
