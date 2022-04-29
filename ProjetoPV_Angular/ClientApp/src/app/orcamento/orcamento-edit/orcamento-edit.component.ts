import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from '../../models/models-services/orcamento.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Orcamento } from '../../models/orcamento.model';

@Component({
  selector: 'app-orcamento-edit',
  templateUrl: './orcamento-edit.component.html',
  styleUrls: ['./orcamento-edit.component.css']
})
export class OrcamentoEditComponent implements OnInit {
  id: string = '';  
  orcamento: Orcamento = new Orcamento();

  constructor(private service: OrcamentoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getCustomOrcamentoId(this.id).subscribe((orcamento: Orcamento) => {
      this.orcamento = orcamento;
    },
      error => {
        console.error(error);
      });
  }

  onSubmit(orcamentoForm: NgForm) {
    this.service.updateOrcamento(orcamentoForm.value).subscribe(res => {
      this.router.navigateByUrl('/orcamento-list');
    },
      error => {
        console.error(error);
      });
  }
}
