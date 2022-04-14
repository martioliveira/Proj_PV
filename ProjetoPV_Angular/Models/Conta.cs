using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Angular.Models
{
    public class Conta
    {
        [Key]
        public long ContaId { get; set; }

        [Display(Name = "Descrição da Conta")]
        public string Descricao { get; set; }

        [Required, Range(0.0, double.MaxValue)]
        public double Saldo { get; set; }

        [Required, StringLength(3)]
        public string Moeda { get; set; }

        public long TipoContaId { get; set; }

        [Required]
        public long TipoContaId { get; set; }

        public TipoConta? TipoConta { get; set; }

        public List<Transacao>? Transacoes { get; set; }

        public List<Transacao> Transacoes { get; set; }

    }
}
