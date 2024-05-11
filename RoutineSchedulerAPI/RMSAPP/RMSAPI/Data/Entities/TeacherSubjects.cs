namespace RMSAPI.Data.Entities;

public class TeacherSubjects
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    public int Id { get; set; }
    /// <summary>
    /// Gets or sets the teacher identifier.
    /// </summary>
    /// <value>
    /// The teacher identifier.
    /// </value>
    public int TeacherID { get; set; }
    /// <summary>
    /// Gets or sets the teacher.
    /// </summary>
    /// <value>
    /// The teacher.
    /// </value>
    public Teacher Teacher { get; set; }
    /// <summary>
    /// Gets or sets the subject identifier.
    /// </summary>
    /// <value>
    /// The subject identifier.
    /// </value>
    public int SubjectID { get; set; }
    /// <summary>
    /// Gets or sets the subject.
    /// </summary>
    /// <value>
    /// The subject.
    /// </value>
    public Subject Subject { get; set; }
}
