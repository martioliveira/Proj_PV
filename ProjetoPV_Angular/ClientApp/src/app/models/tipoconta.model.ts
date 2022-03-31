export class TipoConta {
  constructor( TipoContaId: bigint,
                 Descricao: TipoContaDescricao ) { }
}

enum TipoContaDescricao {
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
