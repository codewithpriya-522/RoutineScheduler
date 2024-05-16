using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO
{
    public class LoginDTO
    {

        /// <summary>
        /// Gets or sets the username.
        /// </summary>
        /// <value>
        /// The username.
        /// </value>
        [Required]
        [MinLength(3)]
        [DefaultValue("member")]
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets the password.
        /// </summary>
        /// <value>
        /// The password.
        /// </value>
        [Required]
        [StringLength(8, MinimumLength = 4)]
        [DefaultValue("Pa$$w0rd")]
        public string Password { get; set; }
    }
}
