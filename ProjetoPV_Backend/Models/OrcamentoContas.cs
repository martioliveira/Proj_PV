using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Backend.Models
{
    public class OrcamentoContas
    {
        [Key]
        public long OrcamentoContasId { get; set; }

        public long OrcamentoId { get; set; }

        public long ContaId { get; set; }
    }
}
