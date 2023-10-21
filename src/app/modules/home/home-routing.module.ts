import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './pages/home-page/components/asignaciones/asignaciones.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'asignaciones',
        component:AsignacionesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
