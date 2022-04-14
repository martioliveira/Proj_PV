import { Cliente } from "./cliente.model";
import { TipoTransacao } from "./tipotransacao.model";

export class Transacao {
  constructor( public transacaoId: string,
               public tipoTransacao: TipoTransacao,
               public contaOrigemId: bigint,
               public contaDestinoId: bigint,
               public clienteId: bigint,
               public descricao: string,
               public beneficiario: number,
               public valor: number,
               public moeda: string,
               public dataTransacao: string,
               public dataCriacao: string,
               public anexo: string,
               public tipoTransacaoId: bigint ) { }
}
