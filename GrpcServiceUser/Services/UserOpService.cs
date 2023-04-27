using AutoMapper;
using Grpc.Core;
using UserGrpc.Model;
using UserGrpc.Model.Entity;

namespace GrpcServiceUser.Services
{
    public class UserOpService : UserOp.UserOpBase
    {
        public GrpcCrudContext DbGrpcCrud { get; set; }
        public MapperConfiguration MapConfig { get; set; }
        public Mapper UsrMapper { get; set; }

        public UserOpService()
        {
            DbGrpcCrud = new GrpcCrudContext();
            MapConfig = new MapperConfiguration(cfg =>
            cfg.CreateMap<gtUser, User>());
            UsrMapper = new Mapper(MapConfig);
        }

        public override Task<User> UserLogin(UserLoginEntry UserEntry, ServerCallContext context)
        {
            try
            {
                if (UserEntry.Email != null && UserEntry.Password != null)
                {
                    var userlog = DbGrpcCrud.gtUser.Where(q => q.Email == UserEntry.Email && q.Password == UserEntry.Password).FirstOrDefault();
                    if (userlog != null)
                    {
                        if (userlog.Address == null)
                        {
                            userlog.Address = "";
                        }
                    }
                    var UserMap = UsrMapper.Map<User>(userlog);
                    return Task.FromResult(UserMap);
                }
                else
                {
                    return Task.FromResult(new User());
                }
            }
            catch (Exception)
            {
                return Task.FromResult(new User());
            }


        }
        public override Task<ResultStat> UserSignUp(UserAdd user, ServerCallContext context)
        {
            try
            {
                if (user.Name != null && user.LastName != null && user.Email != null && user.Password != null)
                {
                    var addgtUser = new gtUser()
                    {
                        Name = user.Name == "" ? null : user.Name,
                        LastName = user.LastName == "" ? null : user.LastName,
                        IsFemale = user.IsFemale,
                        Address = user.Address == "" ? null : user.Address,
                        Email = user.Email == "" ? null : user.Email,
                        Password = user.Password == "" ? null : user.Password,
                    };

                    DbGrpcCrud.gtUser.Add(addgtUser);
                    DbGrpcCrud.SaveChanges();
                    return Task.FromResult(new ResultStat() { Ok = true });
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
