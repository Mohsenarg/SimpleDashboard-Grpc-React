using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GrpcServiceUser.Helper
{
    public class AuthenticationHandler
    {

        public const string TokenKey = "usrcd@Security@Key@Validator";
        private const int TokenValidity = 30;


        public static UserEntry.Types.AuthResult Authenticate(bool IsLogin)
        {
            string userRole = string.Empty;

            if (IsLogin)
            {
                userRole = "AuthenticatedUser";
            }
            else
            {
                return null;
            }

            var jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(TokenKey);
            var tokenExpiryDateTime = DateTime.Now.AddMinutes(TokenValidity);

            var securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new System.Security.Claims.ClaimsIdentity(new List<Claim>
                {
                    new Claim(ClaimTypes.Role, userRole)
                }),

                Expires = tokenExpiryDateTime,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var securityToken = jwtSecurityTokenHandler.CreateToken(securityTokenDescriptor);
            var token = jwtSecurityTokenHandler.WriteToken(securityToken);

            return new UserEntry.Types.AuthResult
            {
                AccessToken = token,
                ExpiresIn = (int)tokenExpiryDateTime.Subtract(DateTime.Now).TotalSeconds
            };

        }
    }
}
