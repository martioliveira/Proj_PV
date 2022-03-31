import { Conta }   from "./conta.model";
import { Cliente } from "./cliente.model";

export class Contacliente {
  constructor( ContaClientesId: bigint,
                         Conta: Conta,
                       Cliente: Cliente ) { }
}
