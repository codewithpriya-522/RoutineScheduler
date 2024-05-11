using RMSAPI.Data.Enums;

namespace RMSAPI.Data.Entities;

public class Subject
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
    /// Gets or sets the type.
    /// </summary>
    /// <value>
    /// The type.
    /// </value>
    public SubjectType Type { get; set; }

    /// <summary>
    /// Gets or sets the batch subjects.
    /// </summary>
    /// <value>
    /// The batch subjects.
    /// </value>
    public virtual ICollection<BatchSubjects> BatchSubjects { get; set; }
    /// <summary>
    /// Gets or sets the subject teachers.
    /// </summary>
    /// <value>
    /// The subject teachers.
    /// </value>
    public virtual ICollection<TeacherSubjects> SubjectTeachers { get; set; }
}