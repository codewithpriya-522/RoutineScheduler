namespace RMSAPI.Data.Entities;

public class Student
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
    /// Gets or sets the batch identifier.
    /// </summary>
    /// <value>
    /// The batch identifier.
    /// </value>
    public int BatchId { get; set; }
    /// <summary>
    /// Gets or sets the batch.
    /// </summary>
    /// <value>
    /// The batch.
    /// </value>
    public virtual Batch Batch { get; set; }
}
