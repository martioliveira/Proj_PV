import { Categoria } from "./categoria.model";
import { Cliente } from "./cliente.model";
import { Conta } from "./conta.model";
import { TipoTransacao } from "./tipotransacao.model";

export class Transacao {
  transacaoId: string = '';
  contaOrigemId: number = 0;
  contaOrigem: Conta = new Conta();
  contaDestinoId: number = 0;
  contaDestino: Conta = new Conta();
  clienteId: number = 0;
  descricao: string = '';
  beneficiario: number = 0;
  valor: number = 0;
  moeda: string = '';
  dataTransacao: string = '';
  dataCriacao: string = '';
  anexo: string = '';
  tipoTransacaoId: number = 0;
  categoriaId: number = 0;
  categoria: Categoria = new Categoria();
}
