import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { FuturosCandidatos } from '../models/futuros-candidatos';

@Injectable({
  providedIn: 'root'
})
export class FuturosCandidatosService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<FuturosCandidatos[]> {
    return this.http.get<FuturosCandidatos[]>(`${API_CONFIG.baseUrl}/futuros-candidatos`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados do futuro candidato.");
        console.error(error);
        return EMPTY;
      })
    );
    }

    public delete(id: number): Observable<FuturosCandidatos> {
      return this.http.delete<FuturosCandidatos>(`${API_CONFIG.baseUrl}/futuros-candidatos/${id}`).pipe(
        catchError(error => {
          alert("Erro ao excluir futuro candidato.");
          console.error(error);
          return EMPTY;
        })
      );
    }

}
