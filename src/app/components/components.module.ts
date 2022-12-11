import { RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    NavBarComponent
    

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
