import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './pages/home-page/components/asignaciones/asignaciones.component';
import { CursosComponent } from './pages/home-page/components/cursos/cursos.component';
import { UsuariosComponent } from './pages/home-page/components/usuarios/usuarios.component';
import { PerfilComponent } from './pages/home-page/components/perfil/perfil.component';
//HomePageComponent   

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'asignaciones',
        component:AsignacionesComponent,
      },
      {
        path: 'cursos',
        component:CursosComponent,
      },
      {
        path: 'usuarios',
        component:UsuariosComponent,
      },
      {
        path: 'perfilAdmin',
        component:PerfilComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

