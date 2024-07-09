using fullstack.api.Models;
using Microsoft.EntityFrameworkCore;

namespace fullstack.api.Data
{
    public class FullstackDBContext:DbContext

    {
        public FullstackDBContext(DbContextOptions<FullstackDBContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
