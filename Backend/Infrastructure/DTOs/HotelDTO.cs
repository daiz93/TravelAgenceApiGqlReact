 
using Core.Models;
using System.ComponentModel.DataAnnotations;


namespace Infrastructure.DTOs
{
    public class HotelDTO
    {
        public int HotelId { get; set; }
        public string Nom { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Prix { get; set; }
        public string Fabricant { get; set; } = string.Empty;
        public int NombreEtoiles { get; set; }
        public string Ville { get; set; } = string.Empty;
        public string Pays { get; set; } = string.Empty;
        public string Adresse { get; set; } = string.Empty;
        public bool Actif { get; set; } = true;
    }

    public class NewHotelDTO
    {
        public string Nom { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public decimal Prix { get; set; }
        public string Fabricant { get; set; } = string.Empty;
        public int NombreEtoiles { get; set; } 
        public string Ville { get; set; } = string.Empty;
        public string Pays { get; set; }= string.Empty;
        public string Adresse { get; set; } = string.Empty;
        public bool Actif { get; set; } = true;
    }
}



