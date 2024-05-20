namespace RMSAPI.Controllers.DTO;

public class StudentDTO
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
    public string BatchName { get; set; }

    /// <summary>
    /// Gets or sets the last active.
    /// </summary>
    /// <value>
    /// The last active.
    /// </value>
    public DateTime LastActive { get; set; }
    /// <summary>
    /// Gets or sets the gender.
    /// </summary>
    /// <value>
    /// The gender.
    /// </value>
    public string Gender { get; set; }

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
    /// <summary>
    /// Email of the user
    /// </summary>
    public string Email { get; set; }
    /// <summary>
    /// Gets or sets the known as.
    /// </summary>
    /// <value>
    /// The known as.
    /// </value>
    public string KnownAs { get; set; }
}
