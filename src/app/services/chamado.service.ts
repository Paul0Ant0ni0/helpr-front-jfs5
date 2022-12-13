import { catchError } from 'rxjs/operators';
import { API_CONFIG } from './../config/api.config';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamado } from '../models/chamado';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(
    private http: HttpClient,
    private notification: NotificationService) { }

  public findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/chamados`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!","Erro ao buscar dados de chamados.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findById(id: string): Observable<Chamado>{
    return this.http.get<Chamado>(`${API_CONFIG.baseUrl}/chamados/${id}`).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!","Erro ao buscar dados de chamado");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public create(chamado: Chamado): Observable<Chamado> {
    const data = {
      titulo: chamado.titulo,
      descricao: chamado.descricao,
      idCliente: chamado.cliente.id
    }
    return this.http.post<Chamado>(`${API_CONFIG.baseUrl}/chamados`, data).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao cadastrar novo chamado.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public update(chamado: Chamado): Observable<Chamado>{
    const data = {
      titulo: chamado.titulo,
      descricao: chamado.descricao,
      status: chamado.status,
      idCliente: chamado.cliente.id,
      idFuncionario: chamado.funcionario.id
    }
    
    return this.http.put<Chamado>(`${API_CONFIG.baseUrl}/chamados/${chamado.idChamado}`, data).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao editar chamado.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
