export class TipoConta {
  constructor( TipoContaId: string,
                 Descricao: TipoContaDescricao ) { }
}

export enum TipoContaDescricao {
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
