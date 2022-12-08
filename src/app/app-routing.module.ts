import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
    title: 'Helpr | Login',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./views/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    title: 'Helpr | Página Principal',
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./views/clientes/clientes.module').then((m) => m.ClientesModule),
    title: 'Helpr | Clientes',
  },
  {
    path: 'chamados',
    loadChildren: () =>
      import('./views/chamados/chamados.module').then((m) => m.ChamadosModule),
    title: 'Helpr | Chamados',
  },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./views/funcionarios/funcionarios.module').then(
        (m) => m.FuncionariosModule
      ),
      title: 'Helpr | Funcionários'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
