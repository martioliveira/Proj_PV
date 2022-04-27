import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../../models/categoria.model';
import { CategoriaService } from '../../models/models-services/categoria.service';

@Component({
  selector: 'app-categoria-details',
  templateUrl: './categoria-details.component.html',
  styleUrls: ['./categoria-details.component.css']
})
export class CategoriaDetailsComponent implements OnInit {
  categoria?: Categoria;
  id: number = 0;

  constructor(private service: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCategoria();
  }

  getCategoria(): void {
    this.service.getCategoria(this.id).subscribe((categoria: Categoria) => this.categoria = categoria);
  }

}
