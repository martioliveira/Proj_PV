import { Cliente } from "./cliente.model";

export class Categoria {
  categoriaId: string = '';
  nome: string = '';
  descricao: string = '';
  cliente: Cliente = new Cliente();
}
