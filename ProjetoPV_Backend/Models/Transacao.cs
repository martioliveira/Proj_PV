using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public class Transacao
    {
        [Key]
        public long TransacaoId { get; set; }

        // Adicionar tipo de transacão

        public long ContaOrigemId { get; set; }
        public long ContaDestinoId { get; set; }

        [Required, Display(Name = "Descrição da Transação")]
        public string Descricao { get; set; }
        public int Beneficiario { get; set; }

        [Required, Range(0.0, double.MaxValue)]
        public double Valor { get; set; }

        [Required]
        public string Moeda { get; set; }

        [DataType(DataType.Date)]
        public DateTime DataTransacao { get; set; }

        [DataType(DataType.Date)]
        public DateTime DataCriacao { get; set; }

        public string Anexo { get; set; }

        [Required]
        public Cliente ClienteId { get; set; }
    }
}
