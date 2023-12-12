using Core.Models;
using System.ComponentModel.DataAnnotations;


namespace Infrastructure.DTOs
{
    public class DossierDTO
    {
        [Key]
        public int DossierId { get; set; }

        // Clé étrangère vers TypeVoyage        
        public int TypeVoyageId { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateArrivee { get; set; }

        public int DureeSejourJours { get; set; }

        public string NumeroVol { get; set; } = string.Empty;

        public string Lieu { get; set; } = string.Empty;
        public bool Actif { get; set; } = true;
        public int ClientId { get;  set; }

        public int ProductHotelProduitId { get; set; }

        public Client? Client { get;  set; }
        public TypeVoyage? TypeVoyage { get;  set; }
        public Hotel? Hotel { get; set; }
    }


    


        public class NewDossierDTO
    {
     
        // Clé étrangère vers TypeVoyage        
        public int TypeVoyageId { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateArrivee { get; set; }

        public int DureeSejourJours { get; set; }

        public string NumeroVol { get; set; } = string.Empty;

        public string Lieu { get; set; } = string.Empty;
        public bool Actif { get; set; } = true;
    }
}
