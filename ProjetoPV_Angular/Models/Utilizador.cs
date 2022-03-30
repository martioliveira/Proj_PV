using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Angular.Models
{
    public class Utilizador
    {
        [Key]
        public long UtilizadorId { get; set; }
        public Cliente Cliente { get; set; }
    }
}
