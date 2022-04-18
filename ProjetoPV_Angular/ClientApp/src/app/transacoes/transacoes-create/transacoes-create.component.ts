import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private service: TransacaoService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit(transacaoForm: NgForm) {
    this.service.createTransacao(transacaoForm.value).subscribe(res => {
    this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }
}
