import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Orcamento } from '../orcamento.model';
import { OrcamentoTb2 } from '../orcamentotb2.model';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getOrcamentos(): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(this.baseUrl + 'api/Orcamentos');
  }

  getCustomOrcamentos(): Observable<OrcamentoTb2[]> {
    return this.http.get<OrcamentoTb2[]>(this.baseUrl + 'api/Orcamentos/Tb2');
  }

  getCustomOrcamentoId(id: string): Observable<OrcamentoTb2> {
    return this.http.get<OrcamentoTb2>(this.baseUrl + 'api/Orcamentos/Tb2/' + id);
  }
}
