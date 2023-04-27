using Microsoft.EntityFrameworkCore;
using UserGrpc.Model.Entity;

namespace UserGrpc.Model
{
    public class GrpcCrudContext : DbContext
    {
        public DbSet<gtUser> gtUser { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            if (!options.IsConfigured)
            {
                options.UseSqlServer(@"Data Source=.;Initial Catalog=GrpcCrud;Integrated Security=True;");
            }
        }

    }
}
