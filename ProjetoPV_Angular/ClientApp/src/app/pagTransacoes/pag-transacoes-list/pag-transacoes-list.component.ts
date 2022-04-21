import { Component, OnInit } from '@angular/core';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { TipotransacaoService } from '../../models/models-services/tipotransacao.service';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { TipoTransacao } from '../../models/tipotransacao.model';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-pag-transacoes-list',
  templateUrl: './pag-transacoes-list.component.html',
  styleUrls: ['./pag-transacoes-list.component.css']
})
export class PagTransacoesListComponent implements OnInit {

  public transacoes: Transacao[] = [];
  public contas: Conta[] = [];

  tipotransacao = {
    "1": "Receita",
    "2": "Despesa",
    "3": "Transação"
  }

  selectedAccountId: any;
  selectedTipoTransacaoId: any;

  constructor(private transacaoService: TransacaoService, private contaService: ContaService, private tipoTransacaoService: TipotransacaoService) {
  }

  ngOnInit(): void {
    this.getContas();
    this.getTransacoes();
  }

  getContas(): void {
    this.contaService.getContas().subscribe((contas: Conta[]) => this.contas = contas);
  }

  getTransacoes(): void {
    this.transacaoService.getTransacoes().subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  getTransacoesFromAccount() {
    this.contaService.getTransacoesConta(this.selectedAccountId).subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  onChangedFilters() {
    if (this.selectedAccountId != "all" && (this.selectedTipoTransacaoId != "all" || this.selectedTipoTransacaoId == null)) {
      if (this.selectedAccountId != "all" && (this.selectedTipoTransacaoId == "all" || this.selectedTipoTransacaoId == null)) {
        //Mostrar todas as transações da conta x
        this.getTransacoesFromAccount();
        console.log("Mostrar todas as transações da conta", this.selectedAccountId);
      }
      if (this.selectedAccountId != "all" && this.selectedTipoTransacaoId != "all") {
        console.log("Mostrar transações da conta X com o tipo Y");
      }
    }
    else {
      // Se for all na conta e all no tipo transação vamos buscar tudo
      this.getTransacoes();
      console.log("Mostrar tudo");
    }
  }

  onDeleteTransacao(id: string) {
    if (confirm("Apagar a transação?")) {
      this.transacaoService.deleteTransacao(id)
        .subscribe(res => {
          this.getTransacoes();
        });
    }
  }

}
