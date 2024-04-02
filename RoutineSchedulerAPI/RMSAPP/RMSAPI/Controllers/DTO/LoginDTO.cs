using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO
{
    public class LoginDTO
    {

        [Required]
        [DefaultValue("routinetest1@gmail.com")]
        public string Username { get; set; }

        [Required]
        [DefaultValue("Pa$$w0rd")]
        public string Password { get; set; }
    }
}
