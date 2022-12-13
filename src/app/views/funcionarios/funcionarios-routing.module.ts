import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component'
import { NewFuncionariosComponent } from './new-funcionarios/new-funcionarios.component';
import { PerfilFuncionarioComponent } from './perfil-funcionario/perfil-funcionario.component';


const routes: Routes = [
  { 
    path: '', 
    component: FuncionariosComponent 
  },
  {
   path:'new',
   component: NewFuncionariosComponent
  },
  {
    path:'edit/:id',
    component: EditFuncionarioComponent
  },
  {
    path: 'meuperfil',
    component: PerfilFuncionarioComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
