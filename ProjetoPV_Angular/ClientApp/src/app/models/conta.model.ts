import { TipoConta } from "./tipoconta.model";

export class Conta {
  constructor( ContaId: string,
             Descricao: string,
                 Saldo: number,
                 Moeda: string,
             TipoConta: TipoConta ) { }
}
