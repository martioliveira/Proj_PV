import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { TransacaoService } from '../../models/models-services/transacao.service';
import { Transacao } from '../../models/transacao.model';

@Component({
  selector: 'app-export-page',
  templateUrl: './export-page.component.html',
  styleUrls: ['./export-page.component.css']
})
export class ExportPageComponent implements OnInit {

  fileName = 'ProjetoPVExport ' + new Date().toLocaleString() + '.xlsx';

  public contas: Conta[] = [];
  public transacoes: Transacao[] = [];

  constructor(private contasService: ContaService, private transacaoService: TransacaoService) { }

  ngOnInit(): void {
    this.getContas();
    this.getTransacaoes();
  }

  getContas(): void {
    this.contasService.getContas().subscribe((contas: Conta[]) => this.contas = contas);
  }

  getTransacaoes(): void {
    this.transacaoService.getTransacoes().subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  exportAll(tableId: string) {
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
 
}
