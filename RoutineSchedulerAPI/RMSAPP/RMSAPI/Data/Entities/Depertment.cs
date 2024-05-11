namespace RMSAPI.Data.Entities;

public class Depertment
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
    /// Gets or sets the teachers.
    /// </summary>
    /// <value>
    /// The teachers.
    /// </value>
    public virtual ICollection<Teacher> Teachers { get; set; }
    /// <summary>
    /// Gets or sets the batches.
    /// </summary>
    /// <value>
    /// The batches.
    /// </value>
    public virtual ICollection<Batch> Batches { get; set; }
}