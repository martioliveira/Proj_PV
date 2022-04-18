export class Orcamento {
  constructor( public orcamentoId: string,
               public  dataInicio: string,
               public     dataFim: string,
               public   descricao: string,
               public       valor: number,
               public       moeda: string) { }
}
