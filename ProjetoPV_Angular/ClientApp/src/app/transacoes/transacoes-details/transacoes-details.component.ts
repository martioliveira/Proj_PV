import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-transacoes-details',
  templateUrl: './transacoes-details.component.html'
})
export class TransacoesDetailsComponent implements OnInit {
  transacao: Transacao | undefined;
  id: number = 0;
  constructor(private service: TransacaoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getTransacao();
  }

  getTransacao(): void {
    this.service.getTransacao(this.id).subscribe((transacao: Transacao) => this.transacao = transacao);
  }

}
