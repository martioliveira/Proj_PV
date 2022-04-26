import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { Transacao } from '../../models/transacao.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transacoes-edit',
  templateUrl: './transacoes-edit.component.html'
})
export class TransacoesEditComponent implements OnInit {
  id: number = 0;
  transacao: Transacao = {
    transacaoId: '',
    categoriaId: 0,
    clienteId: 0,
    contaDestinoId: 0,
    contaOrigemId: 0,
    dataCriacao: '',
    dataTransacao: '',
    moeda: '',
    tipoTransacaoId: 0,
    descricao: '',
    anexo: '',
    valor: 0,
    beneficiario: 0
  }

  constructor(private service: TransacaoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getTransacao(this.id).subscribe((transacao: Transacao) => {
      this.transacao = transacao;
    },
      error => {
        console.error(error);
      });
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
