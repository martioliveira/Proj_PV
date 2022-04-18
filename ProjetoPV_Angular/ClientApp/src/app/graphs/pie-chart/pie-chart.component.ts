import { Component, OnInit } from '@angular/core';
import { LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  productSales: any[] = [];

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

  constructor() {
    this.productSales = productSales2;
  }

  ngOnInit(): void {
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

export var productSales2 = [
  {
    "name": "book",
    "value": 5001
  }, {
    "name": "graphic card",
    "value": 7322
  }, {
    "name": "desk",
    "value": 1726
  }, {
    "name": "laptop",
    "value": 2599
  }, {
    "name": "monitor",
    "value": 705
  }
];
