import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './modules/usuarios/usuario-routing.module';
import { HomeModule } from './modules/home/home.module';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { CursosComponent } from './modules/home/pages/home-page/components/cursos/cursos.component';
import { FilterCursoPipe } from './pipes/filter-curso.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    FilterCursoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    HomeRoutingModule,
    HomeModule,
    

  ], exports:[  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
