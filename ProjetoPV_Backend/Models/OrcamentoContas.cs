using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Backend.Models
{
    public class OrcamentoContas
    {
        [Key]
        public long OrcamentoContasId { get; set; }

        public Orcamento Orcamento { get; set; }

        public Conta Conta { get; set; }
    }
}
