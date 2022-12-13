import { CargosRoutingModule } from './cargos-routing.module';
import { CargosComponent } from './cargos/cargos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from 'src/app/components/components.module';
import { NewCargoComponent } from './new-cargo/new-cargo.component';
import { EditCargoComponent } from './edit-cargo/edit-cargo.component';


@NgModule({
  declarations: [
    CargosComponent,
    NewCargoComponent,
    EditCargoComponent,

  ],
  imports: [
    CommonModule,
    CargosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    ComponentsModule
  ]
})
export class CargosModule { }
