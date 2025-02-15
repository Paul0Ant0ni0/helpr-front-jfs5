import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../shared/material/material.module';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FuturosCandidatosComponent } from './futuros-candidatos/futuros-candidatos.component';


@NgModule({
  declarations: [
    ClientesComponent,
    NewClienteComponent,
    EditClienteComponent,
    FuturosCandidatosComponent,
    
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    PipesModule
  ]
})
export class ClientesModule { }
