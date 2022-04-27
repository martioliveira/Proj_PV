import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-conta-details',
  templateUrl: './conta-details.component.html'
})
export class ContaDetailsComponent implements OnInit {
  conta?: Conta;
  id: number = 0;
  public transacoes: Transacao[] = [];

  constructor(private service: ContaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getConta();
    this.service.getTransacoesConta(String(this.id)).subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  getConta(): void {
    this.service.getConta(this.id).subscribe((conta: Conta) => this.conta = conta);
  }



}
