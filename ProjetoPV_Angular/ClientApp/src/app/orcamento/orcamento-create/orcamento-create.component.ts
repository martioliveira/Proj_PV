import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from '../../models/conta.model';
import { ContaService } from '../../models/models-services/conta.service';
import { OrcamentoService } from '../../models/models-services/orcamento.service';

@Component({
  selector: 'app-orcamento-create',
  templateUrl: './orcamento-create.component.html',
  styleUrls: ['./orcamento-create.component.css']
})
export class OrcamentoCreateComponent implements OnInit {

  contas: Conta[] = [];

  constructor(private serviceOrcamento: OrcamentoService, private router: Router, private contaService: ContaService) { }

  ngOnInit(): void {
    this.getContas();
  }

  getContas(): void {
    this.contaService.getContas().subscribe((contas: Conta[]) => {
      this.contas = contas;
    });
  }

  onSubmit(orcamentoForm: NgForm) {
    this.serviceOrcamento.createOrcamento(orcamentoForm.value).subscribe(res => {
      this.router.navigateByUrl('/orcamento-list');
    },
      error => {
        console.error(error);
      });
  }

}
