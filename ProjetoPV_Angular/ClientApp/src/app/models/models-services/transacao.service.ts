import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from '../transacao.model';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getTransacoes(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.baseUrl + 'api/Transacaos');
  }

  getTransacao(id: number): Observable<Transacao> {
    return this.http.get<Transacao>(this.baseUrl + 'api/Transacaos/' + id);
  }

  createTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.post<Transacao>(this.baseUrl + 'api/Transacaos', transacao);
  }

  updateTransacao(transacao: Transacao): Observable<Transacao> {
    return this.http.put<Transacao>(this.baseUrl + 'api/Transacaos/' + transacao.transacaoId, transacao);
  }

  deleteTransacao(id: string): Observable<Transacao> {
    return this.http.delete<Transacao>(this.baseUrl + 'api/Transacaos/' + id);
  }





}
