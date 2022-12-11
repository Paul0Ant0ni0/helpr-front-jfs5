
import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    CargosComponent,
  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class CargosModule { }
