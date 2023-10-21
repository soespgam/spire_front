import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/modules/home/service/cursos/cursos.service';
import { curso } from '../../../../interface/curso.interface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  public cursos: any;

  public cursoValidate: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre_curso: new FormControl('', [Validators.required]),
    intensidad_horaria: new FormControl('', [Validators.required]),
  });

  constructor(public cursosService:CursosService ,private router:Router) {
    this.cursos = [];
  }

  public async ngOnInit() {
    this.getCursos();
  }

    //administrtation cursos
    public create_curso(): void {
      if (this.cursoValidate.valid) {
        let curso: curso = {
          nombre_curso: this.cursoValidate.get('nombre_curso')?.value,
          intensidad_horaria: this.cursoValidate.get('intensidad_horaria')?.value,
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
            this.cursos= res;
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
      if (this.cursoValidate.valid) {
        let curso: curso = {
          id: this.cursoValidate.get('')?.value,
          nombre_curso: this.cursoValidate.get('nombre_curso')?.value,
          intensidad_horaria: this.cursoValidate.get('intensidad_horaria')?.value,
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
    public redirecTo(url:string){
      this.router.navigate([url]);
    }
  

}
