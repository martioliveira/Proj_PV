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
  tipotransacao = tipoTransacaoEnum;
  enumKeys: string[] = [];


  constructor(private service: TransacaoService, private router: Router) {
    this.enumKeys = Object.keys(this.tipotransacao).filter(f => !isNaN(Number(f)));
  }

  ngOnInit(): void {

  }

  onSubmit(transacaoForm: NgForm) {
    this.service.createTransacao(transacaoForm.value).subscribe(res => {
      console.log('Transação criada com sucesso.');
      this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }
}

export enum tipoTransacaoEnum {
  Receita = 1,
  Despesa = 2,
  Transação = 3,
}
