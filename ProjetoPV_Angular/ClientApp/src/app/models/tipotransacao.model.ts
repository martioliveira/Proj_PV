export class TipoTransacao {
 constructor( TipoTransacaoId: string,
                    Descricao: TipoTransacaoDescricao ) { }
}

enum TipoTransacaoDescricao {
  Receita,
  Despesa,
  Transacao
}
