import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../models/models-services/categoria.service';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-transacoes-list',
  templateUrl: './transacoes-list.component.html',
  styleUrls: ['./transacoes-list.component.css']
})
export class TransacoesListComponent implements OnInit {

  @Input() transacoes: Transacao[] = [];
  @Input() contaDetails: boolean = false;
  public categorias: Categoria[] = [];

  tipotransacao: any = {
    "1": "Receita",
    "2": "Despesa",
    "3": "Transação"
  }

  constructor(private service: TransacaoService, private serviceCategoria: CategoriaService) {
  }

  ngOnInit(): void {
    this.getCategorias();
    if (this.transacoes != null && !this.contaDetails)
      this.getTransacoes();
  }

  getTransacoes(): void {
    this.service.getTransacoes().subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  getCategorias(): void {
    this.serviceCategoria.getCategorias().subscribe((categorias: Categoria[]) => this.categorias = categorias);
  }

  onDeleteTransacao(id: string) {
    if (confirm("Apagar a transação?")) {
      this.service.deleteTransacao(id)
        .subscribe(res => {
          this.getTransacoes();
        });
    }
  }

}
