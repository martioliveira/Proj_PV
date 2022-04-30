using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Angular.Models
{
    public class ContaClientes
    {
        [Key]
        public long ContaClientesId { get; set; }

        [Required]
        public string ApplicationUserId { get; set; }

        [Required]
        public long ContaId { get; set; }

        public Conta Conta { get; set; }
    }
}
