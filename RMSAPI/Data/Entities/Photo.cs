using System.ComponentModel.DataAnnotations.Schema;

namespace RMSAPI.Data.Entities
{
    [Table("Photos")]
    public class Photo
    {
        /// <summary>
        /// Gets or sets the identifier.
        /// </summary>
        /// <value>
        /// The identifier.
        /// </value>
        public int Id { get; set; }
        /// <summary>
        /// Gets or sets the URL.
        /// </summary>
        /// <value>
        /// The URL.
        /// </value>
        public string Url { get; set; }
        /// <summary>
        /// Gets or sets a value indicating whether this instance is main.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this instance is main; otherwise, <c>false</c>.
        /// </value>
        public bool IsMain { get; set; }
        /// <summary>
        /// Gets or sets the public identifier.
        /// </summary>
        /// <value>
        /// The public identifier.
        /// </value>
        public string PublicId { get; set; }

        //to define relationship        
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
        public AppUser AppUser { get; set; }
    }
}
