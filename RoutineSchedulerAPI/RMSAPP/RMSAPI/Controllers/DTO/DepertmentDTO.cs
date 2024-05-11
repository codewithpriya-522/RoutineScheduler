using System.ComponentModel;

namespace RMSAPI.Controllers.DTO;

public class DepertmentDTO
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
    [DefaultValue("Computer Application")]
    public string Name { get; set; }
    /// <summary>
    /// Gets or sets the head of department.
    /// </summary>
    /// <value>
    /// The head of department.
    /// </value>
    [DefaultValue("Vogoban")]
    public string HeadOfDepartment { get; set; }
    /// <summary>
    /// Gets or sets the description.
    /// </summary>
    /// <value>
    /// The description.
    /// </value>
    [DefaultValue("This is a sample description of the depertment to indentify")]
    public string Description { get; set; }
}
