import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../models/models-services/categoria.service';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { TipoTransacao } from '../../models/tipotransacao.model';

@Component({
  selector: 'app-transacoes-create',
  templateUrl: './transacoes-create.component.html'
})

 
export class TransacoesCreateComponent implements OnInit {

  transacaoSelecionada = null;
  tipotransacao = {
    "1": "Receita",
    "2": "Despesa",
    "3": "Transação"
  }

  public categorias: Categoria[] = [];

  constructor(private serviceTransacao: TransacaoService, private serviceCategoria: CategoriaService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria(): void {
    this.serviceCategoria.getCategorias().subscribe((categorias: Categoria[]) => this.categorias = categorias);
  }

  onSubmit(transacaoForm: NgForm) {
    this.serviceTransacao.createTransacao(transacaoForm.value).subscribe(res => {
    this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }
}
