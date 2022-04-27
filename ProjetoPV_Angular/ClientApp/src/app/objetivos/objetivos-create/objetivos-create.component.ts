import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjetivoService } from '../../models/models-services/objetivo.service';

@Component({
  selector: 'app-objetivos-create',
  templateUrl: './objetivos-create.component.html',
  styleUrls: ['./objetivos-create.component.css']
})
export class ObjetivosCreateComponent implements OnInit {

  constructor(private service: ObjetivoService, private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit(objetivoForm: NgForm) {
    this.service.createObjetivo(objetivoForm.value).subscribe(res => {
      this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }
}
