namespace RMSAPI.Data.Entities;

public class Batch
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
    /// Gets or sets the department.
    /// </summary>
    /// <value>
    /// The department.
    /// </value>
    public virtual Depertment Department { get; set; }

    /// <summary>
    /// Gets or sets the batch subjects.
    /// </summary>
    /// <value>
    /// The batch subjects.
    /// </value>
    public virtual ICollection<BatchSubjects> BatchSubjects { get; set; }
    /// <summary>
    /// Gets or sets the batch students.
    /// </summary>
    /// <value>
    /// The batch students.
    /// </value>
    public virtual ICollection<Student> BatchStudents { get; set; }


}