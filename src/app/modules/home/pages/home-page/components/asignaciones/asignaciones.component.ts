import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignacionesService } from 'src/app/modules/home/service/asignaciones/asignaciones.service';
import { alumnos, asignacion } from '../../../../interface/asignacion.interface';
import { CursosService } from 'src/app/modules/home/service/cursos/cursos.service';
import { asignacionUser } from 'src/app/modules/home/interface/assingUser.interface';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent {
  public asignaciones: any;
  public asignacion: any;
  public asignacionActual: any;
  public cursos: any;
  public alumnos: alumnos[];
  public cursoAsignado: any;
  public nuevaAsignacion: any;
  public userId: any;
  public cursoId: any;
  public cursosUser: any;


  public asignacionValidate: FormGroup = new FormGroup({
    id: new FormControl(''),
    curso_id: new FormControl('', [Validators.required]),
    user_id: new FormControl('', [Validators.required]),
  });

  constructor(public asignacionesService: AsignacionesService, public cursosService: CursosService, private router: Router) {
    this.asignaciones = [];
    this.cursos = [];
    this.alumnos = [];
    this.asignacion = [];
    this.asignacionActual = {
      id: 0,
      curso_id: 0,
      user_id: 0,
    }
    this.cursosUser = [];
    this.cursoAsignado = [];
    this.nuevaAsignacion = [];
  }

  public ngOnInit() {
    this.getAsignaciones();
    this.getAlumnos();
    this.getCursos();
  }


  public getCursos(): void {
    try {
      this.cursosService.get_cursos().subscribe({
        next: (res) => {
          this.cursos = res;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  public getAlumnos(): void {
    try {
      this.asignacionesService.get_alumnos().subscribe({
        next: (res) => {
          this.alumnos = res;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }

  public get_asignaciones_user(user_id: any) {
    console.log("ed",user_id);
    try {
      this.asignacionesService.asignacion_usuario(user_id).subscribe({
        next: (res) => {
          this.cursosUser = res;
          console.log("22222",this.cursosUser )
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }
  //administrtation asignaciones

  public createAsignacion(): void {
    if (this.asignacionValidate.valid) {
      let asignacion: asignacion = {
        curso_id: this.asignacionValidate.get('curso_id')?.value,
        user_id: this.asignacionValidate.get('user_id')?.value,
      };
      
      this.asignacionesService.create_asignacion(asignacion).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            text: "asignacion creada ",
          });
          this.getAsignaciones();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "hay campos vacios ",
      });
    }
  }
  public getAsignaciones(): void {
    try {
      this.asignacionesService.get_asignaciones().subscribe({
        next: (res) => {
          this.asignaciones = res;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }
  public getAsignacion(asignacion_id: any): void {
    try {
      this.asignacionesService.get_asignacion(asignacion_id).subscribe({
        next: (res) => {
          this.asignacion = res;
          console.log("asinate",this.asignacion)
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }


  public updatedAsignacion(): void {

    for (let asignacion of this.asignacion) {
      this.asignacionActual.id = asignacion.id;
      this.asignacionActual.curso_id = asignacion.curso_id;
      this.asignacionActual.user_id = asignacion.user_id;
    };

    let asignacion: asignacion = {
      id: this.asignacionActual.id,
      curso_id: this.asignacionValidate.get('curso_id')?.value,
      user_id: this.asignacionActual.user_id,
    };

    if (asignacion.curso_id == undefined || asignacion.curso_id == null) {
      asignacion.curso_id = this.asignacionActual.curso_id;
    }

    this.nuevaAsignacion = asignacion.curso_id;

    for (this.cursoAsignado of this.cursosUser) {
      if (this.cursoAsignado.curso_id == this.nuevaAsignacion) {
        Swal.fire({
          icon: "error",
          text: "el alumno ya tiene ese curso asignado , escoja otro o cierre la ventana desde la X ",
        });
        break;
      } else{
        try {
          this.asignacionesService.edit_asignacion(asignacion).subscribe({
            next: (res) => {
              Swal.fire({
                icon: "success",
                text: "asignacion actualizada ",
              });
              this.getAsignaciones();
            },
            error: (error: any) => {
              console.log(error);
            }
          });
        } catch (error) {
          alert("error" + error);
        }
      }
    };
  }
  public deleteAsignacion(asignacion_id: any): void {
    try {
      this.asignacionesService.delete_asignacion(asignacion_id).subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            text: "asignacion eliminada ",
          });
          this.getAsignaciones();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }

  public redirecTo(url: string) {
    this.router.navigate([url]);
  }
}
