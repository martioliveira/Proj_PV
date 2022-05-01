import { TipoConta } from "./tipoconta.model";

export class Conta {
  contaId: string = '';
  descricao: string = '';
  saldo: number = 0;
  moeda: string = '';
  tipoContaId: string = '';
  tipoConta: TipoConta = new TipoConta();
}
