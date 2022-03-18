using System.ComponentModel.DataAnnotations;
namespace ProjetoPV_Backend.Models
{

    public enum TipoTransacaoDescricao
    {
        Receita,
        Despesa,
        Transacao
    }
    public class TipoTransacao
    {
        [Key]
        public long TipoTransacaoId { get; set; }

        [EnumDataType(typeof(TipoTransacaoDescricao))]
        public TipoTransacaoDescricao Descricao { get; set; }

    }
}
