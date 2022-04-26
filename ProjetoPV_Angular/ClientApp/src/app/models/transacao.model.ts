import { Categoria } from "./categoria.model";
import { Cliente } from "./cliente.model";
import { TipoTransacao } from "./tipotransacao.model";

export class Transacao {
  transacaoId: string = '';
  contaOrigemId: number = 0;
  contaDestinoId: number = 0;
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
