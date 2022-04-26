import { Conta }   from "./conta.model";
import { Cliente } from "./cliente.model";

export class Contacliente {
  contaClientesId: string = '';
  conta: Conta = new Conta();
  cliente: Cliente = new Cliente();
}
