using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Backend.Models
{
    public class OrcamentoContas
    {
        [Key]
        public long OrcamentoContasId { get; set; }

        public Orcamento OrcamentoId { get; set; }

        public Conta ContaId { get; set; }
    }
}
