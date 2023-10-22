import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/modules/home/service/cursos/cursos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  public cursos: any;
  public editCurso: any;
  public modal: any;

  public cursoValidate: FormGroup = new FormGroup({
    nombre_curso: new FormControl('', [Validators.required]),
    intensidad_horaria: new FormControl('', [Validators.required]),
  });

  constructor(public cursosService: CursosService, private router: Router) {
    this.cursos = [];
    this.editCurso = {
      id: '',
      nombre_curso: '',
      intensidad_horaria: '',
    };
  }
  public async ngOnInit() {
    this.getCursos();
  }
  //administrtation cursos
  public create_curso(): void {
    if (this.cursoValidate.valid) {
      let curso = {
        nombre_curso: this.cursoValidate.get('nombre_curso')?.value,
        intensidad_horaria: this.cursoValidate.get('intensidad_horaria')?.value,
      };
      console.log("en el cierre", this.cursoValidate, "curso", curso)
      this.cursosService.create_curso(curso).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            text: "curso creado ",
          });
          this.getCursos();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        text: "falta llenar algun campo",
      });
    }
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
      alert("error" + error);
    }
  }
  public getCurso(curso_id: any): void {

    try {
      this.cursosService.get_curso(curso_id).subscribe({
        next: (res) => {
          this.editCurso = res;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  public updated_curso(): void {
    let intensidad_horaria = this.editCurso.intensidad_horaria.toString();

    let curso = {
      id: this.editCurso.id,
      nombre_curso: this.cursoValidate.get('nombre_curso')?.value,
      intensidad_horaria: this.cursoValidate.get('intensidad_horaria')?.value,
    };

    if (curso.nombre_curso == '' || curso.nombre_curso == null) {
      curso.nombre_curso = this.editCurso.nombre_curso;
    }

    if (curso.intensidad_horaria == "" || curso.intensidad_horaria == null) {
      curso.intensidad_horaria = intensidad_horaria;
    }

    try {
      this.cursosService.edit_curso(curso).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            text: "curso Actualizado ",
          });
          this.getCursos();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  public deleteCurso(curso_id: any): void {
    try {
      this.cursosService.delete_curso(curso_id).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            text: "curso Eliminado ",
          });
          this.getCursos();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  public redirecTo(url: string) {
    this.router.navigate([url]);
  }

}
