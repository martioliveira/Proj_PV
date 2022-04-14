import { Component, OnInit } from '@angular/core';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { TipoConta, TipoContaDescricao } from '../../models/tipoconta.model';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {

  public contas: Conta[] = [];
  public transacoes: Transacao[] = [];

  constructor(private service: ContaService) { }

  ngOnInit() {
    this.getContas();
  }

  getContas(): void {
    this.service.getContas().subscribe((contas: Conta[]) => this.contas = contas);
  }

  selectedAccountFillTransactions(contaId: string) {
    this.service.getTransacoesConta(contaId).subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

}
