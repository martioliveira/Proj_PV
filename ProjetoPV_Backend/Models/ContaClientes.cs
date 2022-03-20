using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class ContaClientes
    {
        [Key]
        public long ContaClientesId { get; set; }

        public long ContaId { get; set; }

        public long ClienteId { get; set; }
    }
}
