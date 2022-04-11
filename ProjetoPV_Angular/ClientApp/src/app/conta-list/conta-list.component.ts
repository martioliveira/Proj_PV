import { Component, OnInit } from '@angular/core';
import { Conta } from '../models/conta.model';
import { TipoConta, TipoContaDescricao } from '../models/tipoconta.model';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html'
})
export class ContaListComponent implements OnInit {
 
  contas: Conta[] = [
    new Conta('1', 'Multibanco', 5000, 'EUR', new TipoConta('1', TipoContaDescricao.ContaAtual)),
      new Conta('2', 'Dinheiro', 20, 'EUR', new TipoConta('2', TipoContaDescricao.Dinheiro))
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
