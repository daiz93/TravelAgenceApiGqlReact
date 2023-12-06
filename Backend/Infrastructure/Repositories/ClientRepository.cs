
using Core.Models;
using Infrastructure.Data;
using Infrastructure.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class ClientRepository : IClientRepository
    {
        private readonly TDbContext _dbContext;

        public ClientRepository(TDbContext dbContext)
        {
            _dbContext = dbContext;
          
        }
        public async Task<Client?> Add(Client Client)
        {
           var clientAdded = _dbContext.Clients.Add(Client).Entity;
           
            await _dbContext.SaveChangesAsync();
            return clientAdded;
        }

        public async Task<List<Client>> DeleteAsync(int ClientId)
        {
            var client = await _dbContext.Clients.FindAsync(ClientId);
            if (client != null)
            {
                client.Actif = false;
                await _dbContext.SaveChangesAsync();
            }

            return await _dbContext.Clients.Where(client => client.Actif).ToListAsync();
        }

        public async Task<IEnumerable<Client>> GetAllAsync()
        {
            return await _dbContext.Clients.Where(client => client.Actif)
               .Include(c => c.Dossiers)
                .ToListAsync();
        }

        public async Task<Client?> GetById(int ClientId)
        {
            return await _dbContext.Clients.FindAsync(ClientId);
        }

        public async Task<List<Client>> RestoreAsync(int ClientId)
        {
            var client = await _dbContext.Clients.FindAsync(ClientId);
            if (client != null)
            {
                client.Actif = true;
                await _dbContext.SaveChangesAsync();
            }

            return await _dbContext.Clients.Where(client => client.Actif).ToListAsync();
        }

        public async Task<Client?> UpdateAsync(Client Client)
        {
             _dbContext.Entry(Client).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return null;
            }

            return Client;
        }
    }
}
