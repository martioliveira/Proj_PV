import { HttpClient, HttpParams } from '@angular/common/http';
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

  getTransacoesComFiltros(contaId: string, tipoTransacaoId: string, categoriaId: string, dataInicio: string, dataFim: string): Observable<Transacao[]> {
    var params = new HttpParams();
    params = params.set("ContaId", contaId);
    params = params.set("TipoTransacaoId", tipoTransacaoId);
    params = params.set("CategoriaId", categoriaId);
    params = params.set("DataInicio", dataInicio);
    params = params.set("DataFim", dataFim);
    return this.http.get<Transacao[]>(this.baseUrl + 'api/Transacaos', { params: params });
  }
}
