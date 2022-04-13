import { Component, OnInit } from '@angular/core';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { TipoConta, TipoContaDescricao } from '../../models/tipoconta.model';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html'
})
export class ContaListComponent implements OnInit {

  public contas: Conta[] = [];

  constructor(private service: ContaService) { }

  ngOnInit() {
    this.getContas();
  }

  getContas(): void {
    this.service.getContas().subscribe((contas: Conta[]) => this.contas = contas);
  }

}
