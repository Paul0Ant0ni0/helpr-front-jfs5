import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icons'
})
export class IconsPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'RECEBIDO': return'mark_email_read'
      case 'ATRIBUIDO': return 'update'
      case 'CONCLUIDO': return 'check_circle'
    }
    return '';
  }

}
