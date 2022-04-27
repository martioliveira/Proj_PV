import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../models/models-services/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {
  id: number = 0;
  categoria: Categoria = new Categoria();
  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getCategoria(this.id).subscribe((categoria: Categoria) => {
      this.categoria = categoria;
    },
      error => {
        console.error(error);
      });
  }

  onSubmit(transacaoForm: NgForm) {
    this.service.updateCategoria(transacaoForm.value).subscribe(res => {
      this.router.navigateByUrl('/categoria-list');
    },
      error => {
        console.error(error);
      });
  }

}
