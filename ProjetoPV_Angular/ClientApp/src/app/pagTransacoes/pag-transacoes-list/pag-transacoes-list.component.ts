import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { Conta } from '../../models/conta.model';
import { CategoriaService } from '../../models/models-services/categoria.service';
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
  public categorias: Categoria[] = [];

  tipotransacao: any = {
    "1": "Receita",
    "2": "Despesa",
    "3": "Transação"
  }

  selectedAccountId: string = '';
  selectedTipoTransacaoId: string = '';
  selectedCategoriaId: string = '';
  selectedDataInicio: string = '';
  selectedDataFim: string = '';

  constructor(private transacaoService: TransacaoService, private contaService: ContaService,
    private tipoTransacaoService: TipotransacaoService, private serviceCategoria: CategoriaService) {
  }

  ngOnInit(): void {
    this.getContas();
    this.getTransacoes();
    this.getCategorias();
  }

  getContas(): void {
    this.contaService.getContas().subscribe((contas: Conta[]) => this.contas = contas);
  }

  getCategorias(): void {
    this.serviceCategoria.getCategorias().subscribe((categorias: Categoria[]) => this.categorias = categorias);
  }

  getTransacoes(): void {
    this.transacaoService.getTransacoes().subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  getTransacoesFromAccount() {
    this.contaService.getTransacoesConta(this.selectedAccountId).subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
  }

  onChangedFilters() {
    this.transacaoService.getTransacoesComFiltros(this.selectedAccountId, this.selectedTipoTransacaoId, this.selectedCategoriaId, this.selectedDataInicio, this.selectedDataFim)
      .subscribe((transacoes: Transacao[]) => this.transacoes = transacoes);
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
