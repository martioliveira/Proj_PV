import { Cliente } from "./cliente.model";
import { TipoTransacao } from "./tipotransacao.model";

export class Transacao {
  constructor( TransacaoId: bigint,
             TipoTransacao: TipoTransacao,
             ContaOrigemId: bigint,
            ContaDestinoId: bigint,
                   Cliente: Cliente,
                 Descricao: string,
              Beneficiario: number,
                     Valor: number,
                     Moeda: string,
             DataTransacao: string,
               DataCriacao: string,
                     Anexo: string ) { }
}
