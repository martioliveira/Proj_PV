using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Angular.Models
{
    public class Orcamento
    {
        [Key]
        public long OrcamentoId { get; set; }

        [Display(Name = "Data de Inicio")]
        [DataType(DataType.Date)]
        public DateTime DataInicio { get; set; }

        [Display(Name = "Data de Fim")]
        [DataType(DataType.Date)]
        public DateTime DataFim { get; set; }

        [Display(Name = "Descrição do Orçamento")]
        public string Descricao { get; set; }

        [Required, Range(0.0, double.MaxValue)]
        public double Valor { get; set; }

        [Required, StringLength(3)]
        public string Moeda { get; set; }


    }
}
