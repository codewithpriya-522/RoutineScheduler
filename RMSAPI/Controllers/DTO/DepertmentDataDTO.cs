namespace RMSAPI.Controllers.DTO;

public class DepertmentDataDTO
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
    /// Gets or sets the head of department.
    /// </summary>
    /// <value>
    /// The head of department.
    /// </value>
    public string HeadOfDepartment { get; set; }
    /// <summary>
    /// Gets or sets the description.
    /// </summary>
    /// <value>
    /// The description.
    /// </value>
    public string Description { get; set; }
    /// <summary>
    /// Gets or sets the total teachers.
    /// </summary>
    /// <value>
    /// The total teachers.
    /// </value>
    public int TotalTeachers { get; set; }
    /// <summary>
    /// Gets or sets the total batches.
    /// </summary>
    /// <value>
    /// The total batches.
    /// </value>
    public int TotalBatches { get; set; }
    /// <summary>
    /// Gets or sets the total subjects.
    /// </summary>
    /// <value>
    /// The total subjects.
    /// </value>
    public int TotalSubjects { get; set; }
    /// <summary>
    /// Gets or sets the total students.
    /// </summary>
    /// <value>
    /// The total students.
    /// </value>
    public int TotalStudents { get; set; }

}