using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Angular.Models
{
    public class Categoria
    {
        [Key]
        public long CategoriaId { get; set; }

        [Required, Display(Name = "Nome da Categoria")]
        public string Nome { get; set; }

        [Display(Name = "Descrição da Categoria")]
        public string Descricao { get; set; }
        public Cliente? Cliente { get; set; }
    }
}
