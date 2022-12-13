import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from, catchError, EMPTY } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: AngularFireStorage,
    private notification: NotificationService
  ) { }

  public uploadFoto(photo: File): Observable<any> {
    const promise = this.storage.upload(`fotos/${Date.now()}`, photo);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro no envio do arquivo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public deletar(photo: string): Observable<any>{
    const promise = this.storage.refFromURL(photo).delete();
    return from(promise).pipe(
      catchError(error => {
        this.notification.showError("ERRO!!!", "Erro ao deletar o arquivo.");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
