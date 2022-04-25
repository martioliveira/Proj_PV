using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Angular.Models
{
    public class OrcamentoContas
    {
        [Key]
        public long OrcamentoContasId { get; set; }

        public Orcamento Orcamento { get; set; }
        public long OrcamentoId { get; set; }

        public Conta Conta { get; set; }
        public long ContaId { get; set; }
    }
}
