export class Objetivo {
  constructor(public objetivoId: string,
              public dataInicio: string,
              public dataFim: string,
              public descricao: string,
              public valorAtingir: number,
              public valorAcumulado: number,
              public moeda: string ) { }
}
