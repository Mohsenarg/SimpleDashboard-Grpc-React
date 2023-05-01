using AutoMapper;
using UserGrpc.Model;
using UserGrpc.Model.Entity;

namespace GrpcServiceUser.Mapp
{
    public class UserMapper
    {
        public long Id { get; set; }
        public GrpcCrudContext DbGrpcCrud { get; set; }
        public MapperConfiguration MapConfig { get; set; }
        public Mapper _Mapper { get; set; }

        public UserMapper(long id)
        {
            Id = id;
            MapConfig = new MapperConfiguration(cfg =>
            cfg.CreateMap<gtUser, UserEntry.Types.Data>()
            .ReverseMap()
            .ForMember(des => des.Id ,opt => opt.MapFrom(s => Id))
            );
            _Mapper = new Mapper(MapConfig);
        }

    }
}
