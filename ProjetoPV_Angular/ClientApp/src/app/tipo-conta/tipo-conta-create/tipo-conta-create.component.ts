import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TipocontaService } from '../../models/models-services/tipoconta.service';

@Component({
  selector: 'app-tipo-conta-create',
  templateUrl: './tipo-conta-create.component.html',
  styleUrls: ['./tipo-conta-create.component.css']
})
export class TipoContaCreateComponent implements OnInit {

  constructor(private service: TipocontaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(tipoContaForm: NgForm) {
    this.service.createTipoConta(tipoContaForm.value).subscribe(res => {
      this.router.navigateByUrl('/tipo-conta');
    },
      error => {
        console.error(error);
      });
  }

}
