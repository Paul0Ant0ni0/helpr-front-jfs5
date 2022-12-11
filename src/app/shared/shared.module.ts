import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsPipe } from './pipes/icons.pipe';


@NgModule({
  declarations: [
    IconsPipe,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconsPipe
  ]
})
export class SharedModule { }
