using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class TDbContext: DbContext
    {
        public TDbContext(DbContextOptions options)  : base(options)
        {
            
        }

        public DbSet<TypeVoyage> TypeVoyages { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Produit> Produits { get; set; }

        public DbSet<Hotel> Hotels { get; set; }

        public DbSet<Dossier> Dossiers { get; set; }
    }
}