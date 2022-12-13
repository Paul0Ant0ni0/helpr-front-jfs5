import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

@NgModule({
  declarations: [
    NavBarComponent,
    DetalhesComponent,
    DetalhesClienteComponent
    

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    PipesModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class ComponentsModule { }
