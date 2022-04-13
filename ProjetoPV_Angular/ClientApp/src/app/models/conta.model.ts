import { TipoConta } from "./tipoconta.model";

export class Conta {
  constructor( public ContaId: string,
               public Descricao: string,
               public Saldo: number,
               public Moeda: string,
               public TipoContaId: string,
             public TipoConta: TipoConta,
             ) {}
}
