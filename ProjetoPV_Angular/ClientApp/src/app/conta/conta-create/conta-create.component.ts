import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from '../../models/models-services/conta.service';

@Component({
  selector: 'app-conta-create',
  templateUrl: './conta-create.component.html'
})
export class ContaCreateComponent implements OnInit {

  constructor(private service: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(contaForm: NgForm) {
    this.service.createConta(contaForm.value).subscribe(res => {
      console.log('Conta criada com sucesso.');
      this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }

}
