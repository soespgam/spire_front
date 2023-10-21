import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AsignacionComponentModule } from './pages/home-page/components/asignaciones/asignacion-component.module';


import { AdminService } from './service/admin.service';
import { AlumnoService } from './service/alumno.service';
import { CursosService } from './service/cursos/cursos.service';
import { UsuariosService } from '../usuarios/service/service-usuarios.service';
import { AsignacionesService } from './service/asignaciones/asignaciones.service';


import { UsuariosComponent } from './pages/home-page/components/usuarios/usuarios.component';
import { PerfilComponent } from './pages/home-page/components/perfil/perfil.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
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
