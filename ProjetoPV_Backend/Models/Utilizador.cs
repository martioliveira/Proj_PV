using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class Utilizador
    {
        [Key]
        public long UtilizadorId { get; set; }
        public long ClienteId { get; set; }
    }
}
