using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using RMSAPI.Data.Entities;
using RMSAPI.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace RMSAPI.Services
{
    public class TokenService : ITokenService
    {
        private readonly SymmetricSecurityKey _key;
        private readonly UserManager<AppUser> userManager;

        /// <summary>
        /// Constructor Init Key
        /// </summary>
        /// <param name="config"></param>
        public TokenService(IConfiguration config, UserManager<AppUser> userManager)
        {
            _key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]));
            this.userManager = userManager;
        }
        public async Task<string> CreateToken(AppUser user)
        {
            var claim = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.NameId, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
            };
            //Adding role in token service
            var roles = await userManager.GetRolesAsync(user);

            claim.AddRange(roles.Select(role => new Claim(ClaimTypes.Role, role)));

            var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claim),
                Expires = DateTime.Now.AddDays(7),
                SigningCredentials = creds
            };

            var tokenHandlar = new JwtSecurityTokenHandler();
            var token = tokenHandlar.CreateToken(tokenDescriptor);
            return tokenHandlar.WriteToken(token);
        }
    }
}
