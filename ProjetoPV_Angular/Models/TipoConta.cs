using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Angular.Models
{
    public class TipoConta
    {
        [Key]
        public long TipoContaId { get; set; }

        [Required]
        public string Descricao { get; set; }
    }
}
