import { Component, OnInit } from '@angular/core';
import { TipocontaService } from '../../models/models-services/tipoconta.service';
import { TipoConta } from '../../models/tipoconta.model';

@Component({
  selector: 'app-tipo-conta-list',
  templateUrl: './tipo-conta-list.component.html',
  styleUrls: ['./tipo-conta-list.component.css']
})
export class TipoContaListComponent implements OnInit {

  public tipocontas: TipoConta[] = [];
  public displayedColumns: string[] = ['descricao', 'acao'];

  constructor(private service: TipocontaService) { }

  ngOnInit(): void {
    this.getTipoContas();
  }

  getTipoContas(): void {
    this.service.getTipoContas().subscribe((tipocontas: TipoConta[]) => this.tipocontas = tipocontas);
  }

  onDeleteTipoConta(id: string) {
    if (confirm("Apagar o Tipo de Conta?")) {
      this.service.deleteTipoConta(id)
        .subscribe(res => {
          this.getTipoContas();
        });
    }
  }

}
