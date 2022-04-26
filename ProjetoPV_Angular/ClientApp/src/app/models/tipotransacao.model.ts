export class TipoTransacao {
  tipoTransacaoId: string = '';
  descricao: string = '';
}

enum TipoTransacaoDescricao {
  Receita,
  Despesa,
  Transacao
}
