import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Perfil } from '../enums/perfil.enum';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }



  public findByEmail(email: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuarios/email/${email}`).pipe(
      catchError(error => {
        alert("Erro ao buscar o usuário!");
        console.error(error);
        return EMPTY;
      })
    )
  }


  public getPerfil(id: number):Observable<Perfil>{
    return this.http.get<Perfil>(`${API_CONFIG.baseUrl}/usuarios/${id}/perfil`).pipe(
      catchError(error => {
        alert("Erro ao buscar o perfil do usuário!");
        console.error(error);
        return EMPTY;
      })
    );
  }

}
