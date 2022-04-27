import { Transacao } from "./transacao.model";

export class OrcamentoTb2 {
  orcamentoId: string = '';
  dataInicio: string = '';
  dataFim: string = '';
  descricao: string = '';
  valor: number = 0;
  moeda: string = '';
  restante: number = 0;
  gasto: number = 0;
  percentagem: number = 0;
  percentager: number = 0;
  transorca: Transacao[] = [];
}
