import { Cliente } from "./cliente.model";

export class Categoria {
  constructor( public categoriaId: string,
                      public nome: string,
                 public descricao: string,
                   public cliente: Cliente ) { }
}
