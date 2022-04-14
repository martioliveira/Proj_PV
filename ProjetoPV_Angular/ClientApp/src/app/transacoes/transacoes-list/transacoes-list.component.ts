import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-transacoes-list',
  templateUrl: './transacoes-list.component.html'
})
export class TransacoesListComponent implements OnInit {

  @Input() transacoes: Transacao[] = [];

  constructor(private service: TransacaoService) { }

  ngOnInit(): void {
    if (this.transacoes!=null)
      this.getTransacoes();
  }

  getTransacoes(): void {
    this.service.getTransacoes().subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

}
