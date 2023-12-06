
using Core.Models;
using Infrastructure.Data;
using Infrastructure.IRepositories;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories
{
    public class HotelRepository: IHotelRepository
    {

        private readonly TDbContext _dbContext;

        public HotelRepository(TDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Hotel?> Add(Hotel hotel)
        {
            _dbContext.Hotels.Add(hotel);
            await _dbContext.SaveChangesAsync();
            return hotel;
        }

        public async Task<List<Hotel>> DeleteAsync(int HotelId)
        {
            var Hotel = await _dbContext.Hotels.FindAsync(HotelId);
            if (Hotel != null)
            {
                Hotel.Actif = false;
                await _dbContext.SaveChangesAsync();
            }

            return await _dbContext.Hotels.Where(Hotel => Hotel.Actif).ToListAsync();
        }

        public async Task<IEnumerable<Hotel>> GetAllAsync()
        {
            return await _dbContext.Hotels.Where(Hotel => Hotel.Actif).ToListAsync();
        }

        public async Task<Hotel?> GetById(int HotelId)
        {
            return await _dbContext.Hotels.FindAsync(HotelId);
        }

        public async Task<List<Hotel>> RestoreAsync(int HotelId)
        {
            var Hotel = await _dbContext.Hotels.FindAsync(HotelId);
            if (Hotel != null)
            {
                Hotel.Actif = true;
                await _dbContext.SaveChangesAsync();
            }

            return await _dbContext.Hotels.Where(Hotel => Hotel.Actif).ToListAsync();
        }

        public async Task<Hotel?> UpdateAsync(Hotel Hotel)
        {
             _dbContext.Entry(Hotel).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                return null;
            }

            return Hotel;
        }
    }
}
