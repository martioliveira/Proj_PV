import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrcamentoService } from '../../models/models-services/orcamento.service';
import { Orcamento } from '../../models/orcamento.model';
import { OrcamentoTb2 } from '../../models/orcamentotb2.model';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-orcamento-details',
  templateUrl: './orcamento-details.component.html',
  styleUrls: ['./orcamento-details.component.css']
})
export class OrcamentoDetailsComponent implements OnInit {
  id: string = "";
  orcamento: OrcamentoTb2 = new OrcamentoTb2();

  tipotransacao: any = {
    "1": "Receita",
    "2": "Despesa",
    "3": "Transação"
  }

  constructor(private service: OrcamentoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOrcamentoId(this.id);
  }

  getOrcamentoId(id: string) {
    this.service.getCustomOrcamentoId(id).subscribe((orcamento: OrcamentoTb2) => this.orcamento = orcamento);
  }
}
