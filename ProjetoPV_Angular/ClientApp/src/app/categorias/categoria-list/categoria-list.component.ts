import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../models/models-services/categoria.service';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  public categorias: Categoria[] = [];

  constructor(private serviceCategoria: CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.serviceCategoria.getCategorias().subscribe((categorias: Categoria[]) => this.categorias = categorias);
  }
}
