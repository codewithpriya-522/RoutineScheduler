using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO
{
    public class LoginDTO
    {

        [Required]
        [MinLength(3)]
        [DefaultValue("member")]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4)]
        [DefaultValue("Pa$$w0rd")]
        public string Password { get; set; }
    }
}
