import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Conta } from '../conta.model';
import { Transacao } from '../transacao.model';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getContas(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.baseUrl + 'api/Contas');
  }

  getConta(id: number): Observable<Conta> {
    return this.http.get<Conta>(this.baseUrl + 'api/Contas/' + id);
  }

  getTransacoesConta(id: string): Observable<Transacao[]> {
    return this.http.get<Transacao[]>(this.baseUrl + 'api/Contas/Transacoes/' + id)
  }

  createConta(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(this.baseUrl + 'api/Contas', conta);
  }

  deleteConta(id: string): Observable<Conta> {
    return this.http.delete<Conta>(this.baseUrl + 'api/Contas/' + id);
  }

  updateConta(conta: Conta): Observable<Conta> {
    return this.http.put<Conta>(this.baseUrl + 'api/Contas/' + conta.contaId, conta);
  }
}
