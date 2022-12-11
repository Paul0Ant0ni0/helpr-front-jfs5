import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from, catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  public uploadFoto(photo: File): Observable<any> {
    const promise = this.storage.upload(`fotos/${Date.now()}`, photo);
    return from(promise).pipe(
      catchError(error => {
        alert("Erro no envio do arquivo.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
