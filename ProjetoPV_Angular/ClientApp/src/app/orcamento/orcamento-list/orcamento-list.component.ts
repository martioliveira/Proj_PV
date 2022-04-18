import { Component, OnInit } from '@angular/core';
import { Orcamento } from '../../models/orcamento.model';
import { OrcamentoService } from '../../models/models-services/orcamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orcamento-list',
  templateUrl: './orcamento-list.component.html',
  styleUrls: ['./orcamento-list.component.css']
})
export class OrcamentoListComponent implements OnInit {
  public orcamentos: Orcamento[] = [];

  constructor(private service: OrcamentoService,
              private router: Router) { }

  ngOnInit(): void {
    this.getOrcamentos();
  }

  getOrcamentos(): void {
    this.service.getOrcamentos().subscribe((orcamentos: Orcamento[]) => this.orcamentos = orcamentos);
  }

  onClickOrcamento(id: string) {
    this.router.navigateByUrl('/orcamento-details/' + id);
  }

  //getGastoOrcamento() {

  //}
}
