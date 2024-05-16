namespace RMSAPI.Data.Entities;

public class Teacher
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    public int Id { get; set; }
    /// <summary>
    /// Gets or sets the application user identifier.
    /// </summary>
    /// <value>
    /// The application user identifier.
    /// </value>
    public int AppUserId { get; set; }
    /// <summary>
    /// Gets or sets the application user.
    /// </summary>
    /// <value>
    /// The application user.
    /// </value>
    public virtual AppUser AppUser { get; set; }
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
    /// Gets or sets the teacher subjects.
    /// </summary>
    /// <value>
    /// The teacher subjects.
    /// </value>
    public virtual ICollection<TeacherSubjects> TeacherSubjects { get; set; }

    // Batch mapping 
    // Subject mapping 
    // Depertment mapping
    // 
}
