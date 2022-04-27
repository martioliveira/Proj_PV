import { Conta } from "./conta.model";
import { Orcamento } from "./orcamento.model";

export class Orcamentocontas {
  orcamentoContasId: string = '';
  orcamento: Orcamento = new Orcamento();
  conta: Conta = new Conta();
}
