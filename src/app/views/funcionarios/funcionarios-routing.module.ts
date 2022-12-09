import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionariosComponent } from './funcionarios/funcionarios.component'
import { NewFuncionariosComponent } from './new-funcionarios/new-funcionarios.component';


const routes: Routes = [
  { 
    path: '', 
    component: FuncionariosComponent 
  },
  {
   path:'new',
   component: NewFuncionariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
