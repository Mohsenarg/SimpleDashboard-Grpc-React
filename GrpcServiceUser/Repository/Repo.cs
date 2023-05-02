using AutoMapper;
using Grpc.Core;
using GrpcServiceUser.Mapp;
using Microsoft.AspNetCore.Session;
using UserGrpc.Model;
using UserGrpc.Model.Entity;

namespace GrpcServiceUser.Repository
{
    public class Repo
    {
        static volatile public int Id = 0;
        public UserMapper mp { get; set; }
        public GrpcCrudContext DbGrpcCrud { get; set; }


        public Repo()
        {
            DbGrpcCrud = new GrpcCrudContext();
        }

        public UserEntry.Types.Data Select(UserLoginEntry user) 
        {
            UserEntry.Types.Data UserMap = new UserEntry.Types.Data();
            if (user.Email != null && user.Password != null)
            {
                var userlog = DbGrpcCrud.gtUser.Where(q => q.Email == user.Email && q.Password == user.Password).FirstOrDefault();
                if (userlog != null)
                {
                    Id = userlog.Id.ToInt();
                    if (userlog.Address == null)
                    {
                        userlog.Address = "";
                    }
                }
                mp = new UserMapper(Id);
                UserMap = mp._Mapper.Map<UserEntry.Types.Data>(userlog);
            }
            return UserMap;
        }
        public UserEntry.Types.Data Insert(UserEntry.Types.Data user)
        {
            UserEntry.Types.Data UserMap = new UserEntry.Types.Data();
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
                Id = addgtUser.Id.ToInt();
                mp = new UserMapper(Id);
                UserMap = mp._Mapper.Map<UserEntry.Types.Data>(addgtUser);
            }
            return UserMap;
        }
        public ResultStat Update(UserEntry.Types.Data user)
        {
            if (Id != 0 && user.Name != null && user.LastName != null && user.Email != null && user.Password != null)
            {
                var SeletedUser = DbGrpcCrud.gtUser.Where(q => q.Id == Id).FirstOrDefault();
                if (SeletedUser != null)
                {
                    SeletedUser.Name = user.Name == "" ? null : user.Name;
                    SeletedUser.LastName = user.LastName == "" ? null : user.LastName;
                    SeletedUser.IsFemale = user.IsFemale;
                    SeletedUser.Address = user.Address == "" ? null : user.Address;
                    SeletedUser.Email = user.Email == "" ? null : user.Email;
                    SeletedUser.Password = user.Password == "" ? null : user.Password;
                    DbGrpcCrud.SaveChanges();
                    return new ResultStat() { Ok = true };
                }
                else
                {
                    return new ResultStat() { Ok = false };
                }
            }
            else
            {
                return new ResultStat() { Ok = false };
            }
        }
        public ResultStat Delete(UserDeleteEntry user)
        {
            if (Id != 0)
            {
                var SeletedUser = DbGrpcCrud.gtUser.Where(q => q.Id == Id).FirstOrDefault();
                if (SeletedUser != null)
                {
                    DbGrpcCrud.gtUser.Remove(SeletedUser);
                    DbGrpcCrud.SaveChanges();
                    return new ResultStat() { Ok = true };
                }
                else
                {
                    return new ResultStat() { Ok = false };
                }
            }
            else
            {
                return new ResultStat() { Ok = false };
            }
        }

    }
}
