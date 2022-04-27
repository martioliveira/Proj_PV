import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { TipocontaService } from '../../models/models-services/tipoconta.service';
import { TipoConta } from '../../models/tipoconta.model';

@Component({
  selector: 'app-conta-edit',
  templateUrl: './conta-edit.component.html'
})
export class ContaEditComponent implements OnInit {
  id: number = 0;
  conta: Conta = new Conta();
  tipoContas: TipoConta[] = [];
  constructor(private service: ContaService, private route: ActivatedRoute, private router: Router, private tipoContaService: TipocontaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getConta(this.id).subscribe((conta: Conta) => {
      this.conta = conta;
    },
      error => {
        console.error(error);
      });
    this.getTipoContas();
  }

  onSubmit(contaForm: NgForm) {
    this.service.updateConta(contaForm.value).subscribe(res => {
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
