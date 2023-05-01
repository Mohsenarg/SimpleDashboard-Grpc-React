using Grpc.Core;
using GrpcServiceUser.Helper;
using GrpcServiceUser.Repository;
using Microsoft.AspNetCore.Authorization;

namespace GrpcServiceUser.Services
{
    public class UserOpService : UserOp.UserOpBase
    {
        public Repo repo { get; set; }

        public UserOpService()
        {
            repo = new Repo();
        }

        [AllowAnonymous]
        public override Task<UserEntry> Login(UserLoginEntry UserLogin, ServerCallContext context)
        {
            try
            {
                UserEntry.Types.Data user = repo.Select(UserLogin);
                if (user != null) 
                {
                    UserEntry.Types.AuthResult authResult = AuthenticationHandler.Authenticate(true);
                    return Task.FromResult(new UserEntry()
                    {
                        Data = user,
                        AuthResult = authResult,
                        ResultStat = new UserEntry.Types.ResultStat() { Ok = true }
                    });

                }
                else
                {
                    return Task.FromResult(new UserEntry()
                    {
                        Data = new UserEntry.Types.Data(),
                        AuthResult = new UserEntry.Types.AuthResult(),
                        ResultStat = new UserEntry.Types.ResultStat() { Ok = false }
                    });
                }

            }
            catch (Exception)
            {
                return Task.FromResult(new UserEntry()
                {
                    Data = new UserEntry.Types.Data(),
                    AuthResult = new UserEntry.Types.AuthResult(),
                    ResultStat = new UserEntry.Types.ResultStat() { Ok = false }
                });
            }


        }

        [AllowAnonymous]
        public override Task<UserEntry> UserAdd(UserEntry.Types.Data user, ServerCallContext context)
        {
            try
            {
                UserEntry.Types.Data resultStat = repo.Insert(user);
                if (resultStat != null)
                {
                    UserEntry.Types.AuthResult authResult = AuthenticationHandler.Authenticate(true);
                    return Task.FromResult(new UserEntry() 
                    {
                        Data = user , AuthResult = authResult , 
                        ResultStat = new UserEntry.Types.ResultStat() { Ok = true } 
                    });

                }
                else
                {
                    return Task.FromResult(new UserEntry()
                    {
                        Data = new UserEntry.Types.Data() ,
                        AuthResult = new UserEntry.Types.AuthResult() ,
                        ResultStat = new UserEntry.Types.ResultStat() { Ok = false }
                    });
                }

            }
            catch (Exception)
            {
                return Task.FromResult(new UserEntry()
                {
                    Data = new UserEntry.Types.Data(),
                    AuthResult = new UserEntry.Types.AuthResult(),
                    ResultStat = new UserEntry.Types.ResultStat() { Ok = false }
                });
            }
        }

        [Authorize(Roles = "AuthenticatedUser")]
        public override Task<ResultStat> UserUpdate(UserEntry.Types.Data user, ServerCallContext context)
        {
            try
            {
                ResultStat resultStat = repo.Update(user);
                if (resultStat != null)
                {
                    return Task.FromResult(resultStat);
                }
                else
                {
                    return Task.FromResult(new ResultStat() { Ok = false });
                }
            }
            catch (Exception)
            {

                return Task.FromResult(new ResultStat() { Ok = false });
            }

        }

        [Authorize(Roles = "AuthenticatedUser")]
        public override Task<ResultStat> UserDelete(UserDeleteEntry userId, ServerCallContext context)
        {
            try
            {
                ResultStat resultStat = repo.Delete(userId);
                if (resultStat != null)
                {
                    return Task.FromResult(resultStat);
                }
                else
                {
                    return Task.FromResult(new ResultStat() { Ok = false });
                }
            }
            catch (Exception)
            {

                return Task.FromResult(new ResultStat() { Ok = false });
            }
        }
    }
}
