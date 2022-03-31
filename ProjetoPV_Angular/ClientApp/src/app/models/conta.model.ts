import { TipoConta } from "./tipoconta.model";

export class Conta {
  constructor( ContaId: bigint,
             Descricao: string,
                 Saldo: number,
                 Moeda: string,
             TipoConta: TipoConta ) { }
}
