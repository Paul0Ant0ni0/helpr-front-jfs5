import { catchError } from 'rxjs/operators';
import { API_CONFIG } from './../config/api.config';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargos } from '../models/cargos';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(
    private http: HttpClient,
    private notification: NotificationService) { }

  // Adicionado o método findAll
  public findAll(): Observable<Cargos[]> {
    return this.http.get<Cargos[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao buscar dados de cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Cargos> {
    return this.http.get<Cargos>(`${API_CONFIG.baseUrl}/cargos/${id}`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao buscar dados de Cargos");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(cargos: Cargos): Observable<Cargos> {
    return this.http.post<Cargos>(`${API_CONFIG.baseUrl}/cargos`, cargos).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao criar novo Cargos.");
        console.error(error);
        return EMPTY;
      })
    );
  }


  public update(cargos: Cargos): Observable<Cargos> {
    return this.http.put<Cargos>(`${API_CONFIG.baseUrl}/cargos/${cargos.idCargo}`, cargos).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao editar o Cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}


