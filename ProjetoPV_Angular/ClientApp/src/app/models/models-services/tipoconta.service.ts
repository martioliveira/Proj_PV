import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoConta } from '../tipoconta.model';

@Injectable({
  providedIn: 'root'
})
export class TipocontaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getTipoContas(): Observable<TipoConta[]> {
    return this.http.get<TipoConta[]>(this.baseUrl + 'api/TipoContas');
  }

  getTipoConta(id: number): Observable<TipoConta> {
    return this.http.get<TipoConta>(this.baseUrl + 'api/TipoContas/' + id);
  }

  createTipoConta(tipoconta: TipoConta): Observable<TipoConta> {
    return this.http.post<TipoConta>(this.baseUrl + 'api/TipoContas', tipoconta);
  }

  deleteTipoConta(id: string): Observable<TipoConta> {
    return this.http.delete<TipoConta>(this.baseUrl + 'api/TipoContas/' + id);
  }

  updateTipoConta(tipoconta: TipoConta): Observable<TipoConta> {
    return this.http.put<TipoConta>(this.baseUrl + 'api/TipoContas/' + tipoconta.tipoContaId, tipoconta);
  }
}
