import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';
import { Conta } from '../../models/conta.model';
import { CategoriaService } from '../../models/models-services/categoria.service';
import { ContaService } from '../../models/models-services/conta.service';
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
    "3": "Transferência"
  }

  public categorias: Categoria[] = [];
  public contas: Conta[] = [];

  constructor(private serviceTransacao: TransacaoService, private serviceCategoria: CategoriaService, private router: Router, private contaService: ContaService) {
  }

  ngOnInit(): void {
    this.getCategoria();
    this.getContas();
  }

  getContas(): void {
    this.contaService.getContas().subscribe((contas: Conta[]) => {
      this.contas = contas;
    });
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
