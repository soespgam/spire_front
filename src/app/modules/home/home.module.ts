import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AdminService } from './service/admin.service';
import { AlumnoService } from './service/alumno.service';
import { CursosService } from './service/cursos/cursos.service';
import { UsuariosService } from '../usuarios/service/service-usuarios.service';
import { AsignacionesService } from './service/asignaciones/asignaciones.service';


import { UsuariosComponent } from './pages/home-page/components/usuarios/usuarios.component';
import { PerfilComponent } from './pages/home-page/components/perfil/perfil.component';
import { AsignacionesComponent } from './pages/home-page/components/asignaciones/asignaciones.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    PerfilComponent,
    AsignacionesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService,
    AlumnoService,
    CursosService,
    UsuariosService,
    AsignacionesService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule { }
