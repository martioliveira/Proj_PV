import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TipocontaService } from '../../models/models-services/tipoconta.service';
import { TipoConta } from '../../models/tipoconta.model';

@Component({
  selector: 'app-tipo-conta-edit',
  templateUrl: './tipo-conta-edit.component.html',
  styleUrls: ['./tipo-conta-edit.component.css']
})
export class TipoContaEditComponent implements OnInit {
  id: number = 0;
  tipoconta: TipoConta = new TipoConta();
  constructor(private service: TipocontaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getTipoConta(this.id).subscribe((tipoconta: TipoConta) => {
      this.tipoconta = tipoconta;
    },
      error => {
        console.error(error);
      });
  }

  onSubmit(tipoContaForm: NgForm) {
    this.service.updateTipoConta(tipoContaForm.value).subscribe(res => {
      this.router.navigateByUrl('/tipo-conta');
    },
      error => {
        console.error(error);
      });
  }

}
