using System.ComponentModel.DataAnnotations;

namespace Core.Models
{

    // Classe de base pour les produits
    public abstract class Produit
    {
        [Key]
        public int ProduitId { get; set; }

        [Required(ErrorMessage = "Le nom du produit est requis.")]
        public string Nom { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;

        [Required(ErrorMessage = "Le prix du produit est requis.")]
        [Range(0.01, double.MaxValue, ErrorMessage = "Le prix doit être supérieur à zéro.")]
        public decimal Prix { get; set; }

        public string Fabricant { get; set; } = string.Empty;

        public bool Actif { get; set; } = true;

        public ICollection<Dossier>? Dossiers { get; set; }

    }

    // Classe spécifique pour les hôtels, héritant de Produit
    public class Hotel : Produit
    {
        // Informations spécifiques aux hôtels
        [Required(ErrorMessage = "Le nombre d'étoiles est requis.")]
        [Range(1, 5, ErrorMessage = "Le nombre d'étoiles doit être compris entre 1 et 5.")]
        public int NombreEtoiles { get; set; } =  1;
        public string Ville { get; set; } = string.Empty;
        public string Pays { get; set; } = string.Empty;
        public string Adresse { get; set; } = string.Empty;
    }

}
