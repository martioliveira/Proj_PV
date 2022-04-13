import { TipoConta } from "./tipoconta.model";

export class Conta {
  constructor( public contaId: string,
               public descricao: string,
               public saldo: number,
               public moeda: string,
               public tipoContaId: string,
             public tipoConta: TipoConta,
             ) {}
}
