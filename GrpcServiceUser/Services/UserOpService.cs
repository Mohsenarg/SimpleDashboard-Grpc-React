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

        public override Task<User> UserSelect(UserLoginEntry UserEntry, ServerCallContext context)
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
        public override Task<ResultStat> UserInsert(UserAdd user, ServerCallContext context)
        {
            try
            {
                if (user.Name != null && user.LastName != null && user.Email != null && user.Password != null )
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
        public override Task<ResultStat> UserUpdate(User user, ServerCallContext context)
        {
            try
            {
                long id = Convert.ToInt64(user.Id);

                if (id != 0 && user.Name != null && user.LastName != null && user.Email != null && user.Password != null)
                {
                    var SeletedUser = DbGrpcCrud.gtUser.Where(q => q.Id == id).FirstOrDefault();
                    if (SeletedUser != null)
                    {
                        SeletedUser.Name = user.Name == "" ? null : user.Name;
                        SeletedUser.LastName = user.LastName == "" ? null : user.LastName;
                        SeletedUser.IsFemale = user.IsFemale;
                        SeletedUser.Address = user.Address == "" ? null : user.Address;
                        SeletedUser.Email = user.Email == "" ? null : user.Email;
                        SeletedUser.Password = user.Password == "" ? null : user.Password;
                        DbGrpcCrud.SaveChanges();
                        return Task.FromResult(new ResultStat() { Ok = true });
                    }
                    else
                    {
                        return Task.FromResult(new ResultStat() { Ok = false });
                    }
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
        public override Task<ResultStat> UserDelete(UserId userId, ServerCallContext context)
        {
            try
            {
                long id = Convert.ToInt64(userId.Id);

                if (id != 0 )
                {
                    var SeletedUser = DbGrpcCrud.gtUser.Where(q => q.Id == id).FirstOrDefault();
                    if (SeletedUser != null)
                    {
                        DbGrpcCrud.gtUser.Remove(SeletedUser);
                        DbGrpcCrud.SaveChanges();
                        return Task.FromResult(new ResultStat() { Ok = true });
                    }
                    else
                    {
                        return Task.FromResult(new ResultStat() { Ok = false });
                    }
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
