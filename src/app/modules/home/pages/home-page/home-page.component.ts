import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { usuario } from 'src/app/modules/usuarios/interface/usuario.interface';


import { UsuariosService } from 'src/app/modules/usuarios/service/service-usuarios.service';
import { curso } from '../../interface/curso.interface';
import { CursosService } from '../../service/cursos/cursos.service';
import { AsignacionesService } from '../../service/asignaciones/asignaciones.service';
import { asignacion } from '../../interface/asignacion.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public usuarioValidate: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required])
  });

  public cursoValidate: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre_curso: new FormControl('', [Validators.required]),
    intensidad_horaria: new FormControl('', [Validators.required]),
  });

  public asignacionValidate: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    curso_id: new FormControl('', [Validators.required]),
    user_id: new FormControl('', [Validators.required]),
  });



  constructor(public  usuariosService: UsuariosService, public cursosService:CursosService , public asignacionesService:AsignacionesService) {
  }

  public async ngOnInit() {
   /*  this.getUsers();
    this.getUser(1);
    this.deleteUser(2); */
    //this.create_curso();
   /*  this.getCursos();
    this.getCurso(2);
    this.deleteCurso(4); 
    this.getAsignaciones();
    this.getAsignacion(3);
    this.deleteAsignacion(11);*/

  }

  //administrtation users
  public getUsers(): void {
    try {
      this.usuariosService.get_Users().subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }
  public getUser(user_id: any): void {
    try {
      this.usuariosService.get_user(user_id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }
  public updated_user(): void {
    if (this.usuarioValidate.valid) {
      let user: usuario = {
        id: this.usuarioValidate.get('')?.value,
        nombre: this.usuarioValidate.get('')?.value,
        correo: this.usuarioValidate.get('')?.value,
        telefono: this.usuarioValidate.get('')?.value,
        password: this.usuarioValidate.get('')?.value,
        rol: this.usuarioValidate.get('')?.value,
      };

      try {
        this.usuariosService.edit_user(user).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        alert("error" + error);
      }
    }
  }
  public create_user(): void {
    if (this.usuarioValidate.valid) {
      let user: usuario = {
        nombre: this.usuarioValidate.get('nombre')?.value,
        correo: this.usuarioValidate.get('correo')?.value,
        telefono: this.usuarioValidate.get('telefono')?.value,
        password: this.usuarioValidate.get('password')?.value,
        rol: this.usuarioValidate.get('rol')?.value,
      };

      try {
        this.usuariosService.create_user(user).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        alert("error" + error);
      }
    }
  }
  public deleteUser(user_id: any): void {
    try {
      this.usuariosService.delete_user(user_id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }

  //administrtation cursos
  public create_curso(): void {
    if (this.cursoValidate.valid) {
      let curso: curso = {
        nombre_curso: this.usuarioValidate.get('nombre_curso')?.value,
        intensidad_horaria: this.usuarioValidate.get('intensidad_horaria')?.value,
      };
      try {
        this.cursosService.create_curso(curso).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        alert("error" + error);
      }
    }
 
  }
  public getCursos(): void {
    try {
      this.cursosService.get_cursos().subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }
  public getCurso(curso_id: any): void {
    try {
      this.cursosService.get_curso(curso_id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }
  public updated_curso(): void {
    if (this.usuarioValidate.valid) {
      let curso: curso = {
        id: this.usuarioValidate.get('')?.value,
        nombre_curso: this.usuarioValidate.get('nombre_curso')?.value,
        intensidad_horaria: this.usuarioValidate.get('intensidad_horaria')?.value,
      };

      try {
        this.cursosService.create_curso(curso).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        alert("error" + error);
      }
    }
  }
  public deleteCurso(curso_id: any): void {
    try {
      this.cursosService.delete_curso(curso_id).subscribe({
        next: (res) => {
          console.log(res);
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
        curso_id: this.usuarioValidate.get('curso_id')?.value,
        user_id: this.usuarioValidate.get('user_id')?.value,
      };
      try {
        this.asignacionesService.create_asignacion(asignacion).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        alert("error" + error);
      }
    }
 
  }
  public getAsignaciones(): void {
    try {
      this.asignacionesService.get_asignaciones().subscribe({
        next: (res) => {
          console.log(res);
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
          console.log(res);
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
    if (this.asignacionValidate.valid) {
      let asignacion: asignacion = {
        id: this.usuarioValidate.get('')?.value,
        curso_id: this.usuarioValidate.get('nombre_curso')?.value,
        user_id: this.usuarioValidate.get('intensidad_horaria')?.value,
      };

      try {
        this.asignacionesService.edit_asignacion(asignacion).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        alert("error" + error);
      }
    }
  }
  public deleteAsignacion(asignacion_id: any): void {
    try {
      this.asignacionesService.delete_asignacion(asignacion_id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }


}
