using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Angular.Models
{
    public class ContaClientes
    {
        [Key]
        public long ContaClientesId { get; set; }

        public Conta Conta { get; set; }

        public Cliente Cliente { get; set; }

        public long ClienteId { get; set; }

        public long ContaId { get; set; }
    }
}
