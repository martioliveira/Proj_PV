using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class ContaClientes
    {
        [Key]
        public long ContaClientesId { get; set; }

        public Conta ContaId { get; set; }

        public Cliente ClientId { get; set; }
    }
}
