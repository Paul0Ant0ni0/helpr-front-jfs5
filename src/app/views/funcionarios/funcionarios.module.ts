import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AvatarPipe } from 'src/app/pipes/avatar.pipe';



@NgModule({
  declarations: [
    FuncionariosComponent,
    AvatarPipe
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  
  ]
})
export class FuncionariosModule { }
