using System.ComponentModel.DataAnnotations;

namespace ProjetoPV_Backend.Models
{
    public enum TipoContaDescricao
    {
        Geral,
        ContaAtual,
        Dinheiro,
        CartãoCrédito,
        ContaPoupança,
        Bónus,
        Seguro,
        Investimento,
        Empréstimo,
        Hipoteca
    }
    public class TipoConta
    {
        [Key]
        public long TipoContaId { get; set; }

        [EnumDataType(typeof(TipoContaDescricao))]
        public TipoContaDescricao Descricao { get; set; }

    }
}
