import { Cliente } from "./cliente.model";

export class Categoria {
  constructor( CategoriaId: bigint,
                      Nome: string,
                 Descricao: string,
                   Cliente: Cliente ) { }
}
