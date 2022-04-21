import { Component, OnInit } from '@angular/core';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { TipoConta } from '../../models/tipoconta.model';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {

  contaIdSelecionada: string | undefined;
  public contas: Conta[] = [];
  public transacoes: Transacao[] = [];

  constructor(private service: ContaService) { }

  ngOnInit() {
    this.getContas();
  }

  getContas(): void {
    this.service.getContas().subscribe((contas: Conta[]) => this.contas = contas);
    console.log(this.contas.toString);
  }

  selectedAccountFillTransactions(contaId: string) {
    this.contaIdSelecionada = contaId;
    this.service.getTransacoesConta(contaId).subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  onDeleteTransacao(id: string) {
    if (confirm("Apagar a conta?")) {
      this.service.deleteConta(id)
        .subscribe(res => {
          this.getContas();
        });
    }
  }
}
