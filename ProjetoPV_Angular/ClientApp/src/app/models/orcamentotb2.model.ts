export class OrcamentoTb2 {
  constructor( public orcamentoId: string,
               public  dataInicio: string,
               public     dataFim: string,
               public   descricao: string,
               public       valor: number,
               public       moeda: string,
               public    restante: number,
               public       gasto: number,
               public percentagem: number,
               public percentager: number,

  ) { }
}
