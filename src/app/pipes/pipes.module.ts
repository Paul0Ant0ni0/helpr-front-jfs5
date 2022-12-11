import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPipe } from './pipes/avatar.pipe';
import { CpfPipe } from './pipes/cpf.pipe';



@NgModule({
  declarations: [
    AvatarPipe,
    CpfPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarPipe,
    CpfPipe
  ]
})
export class PipesModule { }
