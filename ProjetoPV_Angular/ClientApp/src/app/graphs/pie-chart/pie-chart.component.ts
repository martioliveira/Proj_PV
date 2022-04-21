import { Component, OnInit } from '@angular/core';
import { LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public contasToGraphFormat: contaGraph[] = [];
  public contas: Conta[] = [];

  view: [number, number] = [700, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;
  gradient: boolean = false;
  isDoughnut: boolean = false;

  public legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };

  constructor(private service: ContaService) {
   
  }

  ngOnInit(): void {
    this.getContas();
  }

  getContas(): void {
    this.service.getContas().subscribe((contas: Conta[]) => { this.contas = contas; this.fillGraph(); });
  }

  fillGraph(): void {
    this.contasToGraphFormat = this.contas.map(o => {
      return { name: o.descricao, value: o.saldo };
    });
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }


}

type contaGraph = {
  name: string;
  value: number;
};
