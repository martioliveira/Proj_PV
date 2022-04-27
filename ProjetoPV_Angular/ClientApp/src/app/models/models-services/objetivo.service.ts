import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Objetivo } from '../objetivo.model';

@Injectable({
  providedIn: 'root'
})
export class ObjetivoService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getObjetivos(): Observable<Objetivo[]> {
    return this.http.get<Objetivo[]>(this.baseUrl + 'api/Objetivoes');
  }

  getObjetivo(id: number): Observable<Objetivo> {
    return this.http.get<Objetivo>(this.baseUrl + 'api/Objetivoes' + id);
  }

  createObjetivo(objetivo: Objetivo): Observable<Objetivo> {
    return this.http.post<Objetivo>(this.baseUrl + 'api/Objetivoes', objetivo);
  }

  updateObjetivo(objetivo: Objetivo): Observable<Objetivo> {
    return this.http.put<Objetivo>(this.baseUrl + 'api/Objetivoes' + objetivo.objetivoId, Objetivo);
  }

  deleteObjetivo(id: string): Observable<Objetivo> {
    return this.http.delete<Objetivo>(this.baseUrl + 'api/Objetivoes' + id);
  }
}
