import { Component, OnInit } from '@angular/core';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';

@Component({
  selector: 'app-pag-conta-list',
  templateUrl: './pag-conta-list.component.html',
  styleUrls: ['./pag-conta-list.component.css']
})
export class PagContaListComponent implements OnInit {

  public contas: Conta[] = [];

  constructor(private service: ContaService) { }

  ngOnInit(): void {
    this.getContas();
  }

  getContas(): void {
    this.service.getContas().subscribe((contas: Conta[]) => this.contas = contas);
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
