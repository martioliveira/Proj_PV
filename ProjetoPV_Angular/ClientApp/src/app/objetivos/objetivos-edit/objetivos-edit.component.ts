import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../../models/models-services/objetivo.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Objetivo } from '../../models/objetivo.model';

@Component({
  selector: 'app-objetivos-edit',
  templateUrl: './objetivos-edit.component.html',
  styleUrls: ['./objetivos-edit.component.css']
})
export class ObjetivosEditComponent implements OnInit {

  id: string = '';
  objetivo: Objetivo = new Objetivo();

  constructor(private service: ObjetivoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getCustomObjetivoId(this.id).subscribe((objetivo: Objetivo) => {
      this.objetivo = objetivo;
    },
      error => {
        console.error(error);
      });
  }

  onSubmit(objetivoForm: NgForm) {
    this.service.updateObjetivo(objetivoForm.value).subscribe(res => {
      this.router.navigateByUrl('/objetivos-list');
    },
      error => {
        console.error(error);
      });
  }
}
