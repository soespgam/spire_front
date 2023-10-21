import { CUSTOM_ELEMENTS_SCHEMA,NgModule,NO_ERRORS_SCHEMA,} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioRoutingModule } from './usuario-routing.module';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { HomeAlumnComponent } from '../home/pages/home-alumno/home-alumn.component';

import { UsuariosService } from './service/service-usuarios.service';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    HomeAlumnComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    HttpClientModule
  ],
  providers: [UsuariosService,LoginService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UsuarioModule { }
