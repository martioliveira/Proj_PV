using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class ContaClientes
    {
        [Key]
        public long ContaClientesId { get; set; }

        public Conta Conta { get; set; }

        public Cliente Cliente { get; set; }
    }
}
