using Boogie.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Boogie.Api.Data
{
    public class BoogieContext : DbContext
    {
        public BoogieContext(DbContextOptions<BoogieContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
    }
}