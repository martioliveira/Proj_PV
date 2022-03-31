export class TipoTransacao {
 constructor( TipoTransacaoId: bigint,
                    Descricao: TipoTransacaoDescricao ) { }
}

enum TipoTransacaoDescricao {
  Receita,
  Despesa,
  Transacao
}
