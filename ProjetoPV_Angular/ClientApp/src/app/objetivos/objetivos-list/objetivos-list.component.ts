import { Component, Input, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { ObjetivoService } from '../../models/models-services/objetivo.service';
import { Objetivo } from '../../models/objetivo.model';


@Component({
  selector: 'app-objetivos-list',
  templateUrl: './objetivos-list.component.html',
  styleUrls: ['./objetivos-list.component.css']
})
export class ObjetivosListComponent implements OnInit {

  @Input() objetivos: Objetivo[] = [];

  constructor(private service: ObjetivoService) {
  }

  ngOnInit(): void {
    if (this.objetivos != null)
      this.getObjetivos();
  }

  getObjetivos(): void {
    this.service.getObjetivos().subscribe((objetivos: Objetivo[]) => this.objetivos = objetivos);
  }

  onDeleteObjetivo(id: string) {
    if (confirm("Apagar o Objetivo?")) {
      this.service.deleteObjetivo(id)
        .subscribe(res => {
          this.getObjetivos();
        });
    }
  }

}
