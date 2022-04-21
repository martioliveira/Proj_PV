import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from '../../models/models-services/conta.service';
import { TipocontaService } from '../../models/models-services/tipoconta.service';
import { TipoConta } from '../../models/tipoconta.model';

@Component({
  selector: 'app-conta-create',
  templateUrl: './conta-create.component.html'
})
export class ContaCreateComponent implements OnInit {

  tipoContas: TipoConta[] = [];
  constructor(private service: ContaService, private router: Router, private tipoContaService: TipocontaService) { }

  ngOnInit(): void {
    this.getTipoContas();
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

  getTipoContas() {
    this.tipoContaService.getTipoContas().subscribe((tipoContas: TipoConta[]) => this.tipoContas = tipoContas);
  }

}
