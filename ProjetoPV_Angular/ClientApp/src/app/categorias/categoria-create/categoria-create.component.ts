import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../../models/models-services/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  constructor(private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(categoriaForm: NgForm) {
    this.categoriaService.createCategoria(categoriaForm.value).subscribe(res => {
      this.router.navigateByUrl('/categoria-list');
    },
      error => {
        console.error(error);
      });
  }

}
