import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Orcamento } from '../orcamento.model';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getOrcamentos(): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(this.baseUrl + 'api/Orcamentos');
  }
}
