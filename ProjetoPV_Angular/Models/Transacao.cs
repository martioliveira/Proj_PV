using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoPV_Angular.Models
{
    public class Transacao
    {
        [Key]
        public long TransacaoId { get; set; }

        public long ContaOrigemId { get; set; }
        [ForeignKey("ContaOrigemId")]
        public Conta ContaOrigem { get; set; }
        public long ContaDestinoId { get; set; }
        [ForeignKey("ContaDestinoId")]
        public Conta ContaDestino { get; set; }

        [Required, Display(Name = "Descrição da Transação")]
        public string Descricao { get; set; }
        public int Beneficiario { get; set; }

        [Required, Range(0.0, double.MaxValue)]
        public double Valor { get; set; }

        [Required, StringLength(3)]
        public string Moeda { get; set; }

        [DataType(DataType.Date)]
        public DateTime DataTransacao { get; set; }

        [DataType(DataType.Date)]
        public DateTime DataCriacao { get; set; }

        public string Anexo { get; set; }

        public string ApplicationUserId { get; set; }
        public TipoTransacao TipoTransacao { get; set; }

        public long TipoTransacaoId { get; set; }

        public long CategoriaId { get; set; }

        public Categoria Categoria { get; set; }
    }
}
