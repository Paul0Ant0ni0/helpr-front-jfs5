import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { NewFuncionariosComponent } from './new-funcionarios/new-funcionarios.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    FuncionariosComponent,
    NewFuncionariosComponent,
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule
  
  ]
})
export class FuncionariosModule { }
