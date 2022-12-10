import { catchError } from 'rxjs/operators';
import { API_CONFIG } from './../config/api.config';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargos } from '../models/cargos';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private http: HttpClient) { }

  // Adicionado o método findAll
  public findAll(): Observable<Cargos[]> {
    return this.http.get<Cargos[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de cargo.");
        console.error(error);
        return EMPTY;
      })
    );
    }
     

  }