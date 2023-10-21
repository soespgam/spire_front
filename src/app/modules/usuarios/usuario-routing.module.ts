import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomeAlumnComponent } from '../home/pages/home-alumno/home-alumn.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { AsignacionesComponent } from '../home/pages/home-page/components/asignaciones/asignaciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component:LoginPageComponent,
      },
      {
        path: 'homeAlumn',
        component:HomeAlumnComponent,
      },
      {
        path: 'homeAdmin',
        component:HomePageComponent,
      },
      {
        path: 'test',
        component:AsignacionesComponent,
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
