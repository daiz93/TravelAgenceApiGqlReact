﻿ 

using Core.Models;
using Infrastructure.Data;
using Infrastructure.IRepositories;
using Microsoft.EntityFrameworkCore;
namespace Infrastructure.Repositories
{
    public class DossierRepository : IDossierRepository
    {
        private readonly TDbContext _dbContext;

        public DossierRepository(TDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Dossier?> Add(Dossier Dossiers)
        {
           var dossierAdded = _dbContext.Dossiers.Add(Dossiers).Entity;
            await _dbContext.SaveChangesAsync();
            return dossierAdded;
        }

        public async Task<List<Dossier>> DeleteAsync(int DossiersId)
        {
            var dossier = await _dbContext.Dossiers.FindAsync(DossiersId);
            if (dossier != null)
            {
                dossier.Actif = false;
                await _dbContext.SaveChangesAsync();
            }

            return await _dbContext.Dossiers.Where(dossier => dossier.Actif).ToListAsync();
        }

        public async Task<IEnumerable<Dossier>> GetAllAsync()
        {
            return await _dbContext.Dossiers.Where(dossier => dossier.Actif)
                .Include(d => d.Client)
                .Include(d => d.TypeVoyage)
                .Include(d => d.ProductHotel)
                .ToListAsync();
        }

        public async Task<Dossier?> GetById(int DossiersId)
        {
            return await _dbContext.Dossiers.FindAsync(DossiersId);
        }

        public async Task<List<Dossier>> RestoreAsync(int DossiersId)
        {
            var dossier = await _dbContext.Dossiers.FindAsync(DossiersId);
            if (dossier != null)
            {
                dossier.Actif = true;
                await _dbContext.SaveChangesAsync();
            }

            return await _dbContext.Dossiers.Where(dossier => dossier.Actif).ToListAsync();
        }

        public async Task<Dossier?> UpdateAsync(Dossier Dossiers)
        {
             _dbContext.Entry(Dossiers).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return null;
            }

            return Dossiers;
        }
    }
}
