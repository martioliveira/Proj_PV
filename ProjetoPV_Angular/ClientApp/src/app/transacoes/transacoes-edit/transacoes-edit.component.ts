import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { Transacao } from '../../models/transacao.model';
import { NgForm } from '@angular/forms';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../models/models-services/categoria.service';

@Component({
  selector: 'app-transacoes-edit',
  templateUrl: './transacoes-edit.component.html'
})
export class TransacoesEditComponent implements OnInit {
  id: number = 0;
  transacao: Transacao = new Transacao();
  contas: Conta[] = [];
  categorias: Categoria[] = [];

  constructor(private service: TransacaoService, private route: ActivatedRoute, private router: Router, private contaService: ContaService, public categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getTransacao(this.id).subscribe((transacao: Transacao) => {
      this.transacao = transacao;
    },
      error => {
        console.error(error);
      });
    this.getContas();
    this.getCategorias();
  }

  getContas(): void {
    this.contaService.getContas().subscribe((contas: Conta[]) => {
      this.contas = contas;
    });
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias: Categoria[]) => this.categorias = categorias);
  }

  onSubmit(transacaoForm: NgForm) {
    this.service.updateTransacao(transacaoForm.value).subscribe(res => {
    this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }

}
