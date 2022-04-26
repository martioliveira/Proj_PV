import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl + 'api/Categorias');
  }

  getCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.baseUrl + 'api/Categorias/' + id);
  }

  updateCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.baseUrl + 'api/Categorias/' + categoria.categoriaId, categoria);
  }

  createCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.baseUrl + 'api/Categorias', categoria);
  }
}
