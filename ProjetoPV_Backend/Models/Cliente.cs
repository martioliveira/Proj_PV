using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class Cliente
    {
        [Key]
        public long ClienteId { get; set; }
    }
}
