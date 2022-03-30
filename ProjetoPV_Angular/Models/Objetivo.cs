using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Angular.Models
{
    public class Objetivo
    {
        [Key]
        public long ObjetivoId { get; set; }

        [Display(Name = "Data de Inicio")]
        [DataType(DataType.Date)]
        public DateTime DataInicio { get; set; }

        [Display(Name = "Data de Fim")]
        [DataType(DataType.Date)]
        public DateTime DataFim { get; set; }

        [Display(Name = "Descrição do Objetivo")]
        public string Descricao { get; set; }

        [Required, Display(Name = "Valor a atingir"), Range(0.0, double.MaxValue)]
        public double ValorAtingir { get; set; }

        [Required, Display(Name = "Valor acumulado")]
        public double ValorAcumulado { get; set; }

        [Required, StringLength(3)]
        public string Moeda { get; set; }
    }
}
