using System.ComponentModel.DataAnnotations;

namespace Core.Models
{
    public class TypeVoyage
    {
        [Key]
        public int TypeVoyageId { get; set; }

        [Required]
        public string Libelle { get; set; } = string.Empty;
        public bool Actif { get; set; } = true;

        public ICollection<Dossier>? Dossiers { get; set; }
    }
}
