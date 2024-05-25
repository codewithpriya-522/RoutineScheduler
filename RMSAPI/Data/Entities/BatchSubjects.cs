namespace RMSAPI.Data.Entities;

public class BatchSubjects
{
    /// <summary>
    /// Gets or sets the identifier.
    /// </summary>
    /// <value>
    /// The identifier.
    /// </value>
    public int Id { get; set; }
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
    public Batch Batch { get; set; }
    /// <summary>
    /// Gets or sets the subject identifier.
    /// </summary>
    /// <value>
    /// The subject identifier.
    /// </value>
    public int SubjectId { get; set; }
    /// <summary>
    /// Gets or sets the subject.
    /// </summary>
    /// <value>
    /// The subject.
    /// </value>
    public Subject Subject { get; set; }
}
