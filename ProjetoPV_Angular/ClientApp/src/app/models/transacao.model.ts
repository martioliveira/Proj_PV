import { Cliente } from "./cliente.model";
import { TipoTransacao } from "./tipotransacao.model";

export class Transacao {
  constructor( public transacaoId: string,
               public contaOrigemId: number,
               public contaDestinoId: number,
               public clienteId: number,
               public descricao: string,
               public beneficiario: number,
               public valor: number,
               public moeda: string,
               public dataTransacao: string,
               public dataCriacao: string,
               public anexo: string,
               public tipoTransacaoId: number ) { }
}
