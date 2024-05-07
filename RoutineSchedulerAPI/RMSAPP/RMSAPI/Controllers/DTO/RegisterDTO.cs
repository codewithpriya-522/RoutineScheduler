using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Controllers.DTO
{
    public class RegisterDTO
    {
        [Required]
        [DefaultValue("testuser1")]
        public string Username { get; set; }

        [Required]
        [DefaultValue("TestUser1")]
        public string KnownAs { get; set; }
        [Required]
        [DefaultValue("Male")]
        public string Gender { get; set; }
        public DateOnly? DateOfBirth { get; set; } 

        [Required]
        [DefaultValue("Panskura")]
        public string City { get; set; }
        [Required]
        [DefaultValue("India")]
        public string Country { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}
