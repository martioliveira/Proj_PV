export class TipoTransacao {
 constructor( public tipoTransacaoId: string,
                    public descricao: TipoTransacaoDescricao ) { }
}

enum TipoTransacaoDescricao {
  Receita,
  Despesa,
  Transacao
}
