import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { OrcamentoService } from '../../models/models-services/orcamento.service';

@Component({
  selector: 'app-orcamento-create',
  templateUrl: './orcamento-create.component.html',
  styleUrls: ['./orcamento-create.component.css']
})
export class OrcamentoCreateComponent implements OnInit {

  constructor(private serviceOrcamento: OrcamentoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(orcamentoForm: NgForm) {
    this.serviceOrcamento.createOrcamento(orcamentoForm.value).subscribe(res => {
      this.router.navigateByUrl('/');
    },
      error => {
        console.error(error);
      });
  }

}
