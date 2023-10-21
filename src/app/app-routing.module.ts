import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/modules/usuarios/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
  }
  ,{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
