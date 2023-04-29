using AutoMapper;
using Grpc.Core;
using GrpcServiceUser.Repository;
using UserGrpc.Model;
using UserGrpc.Model.Entity;

namespace GrpcServiceUser.Services
{
    public class UserOpService : UserOp.UserOpBase
    {
        public Repo repo { get; set; }

        public UserOpService()
        {
            repo = new Repo();
        }

        public override Task<UserEntry> Login(UserLoginEntry UserLogin, ServerCallContext context)
        {
            try
            {
                UserEntry user = repo.Select(UserLogin);
                if (user != null) 
                {
                    return Task.FromResult(user);
                }
                else
                {
                    return Task.FromResult(new UserEntry());
                }

            }
            catch (Exception)
            {
                return Task.FromResult(new UserEntry());
            }


        }

        public override Task<ResultStat> UserAdd(UserEntry user, ServerCallContext context)
        {
            try
            {
                ResultStat resultStat = repo.Insert(user);
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

        public override Task<ResultStat> UserUpdate(UserEntry user, ServerCallContext context)
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
