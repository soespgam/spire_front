import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AsignacionesService } from 'src/app/modules/home/service/asignaciones/asignaciones.service';
import { asignacion } from '../../../../interface/asignacion.interface';

@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent {
  public asignaciones: any;

  public asignacionValidate: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    curso_id: new FormControl('', [Validators.required]),
    user_id: new FormControl('', [Validators.required]),
  });

  constructor(public asignacionesService:AsignacionesService,private router:Router) {
    this.asignaciones =[];
  }

  public ngOnInit() {
    this.getAsignaciones();
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
            this.asignaciones =res;
            console.log(res);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
    }
 
  }
  public getAsignaciones(): void {
    try {
      this.asignacionesService.get_asignaciones().subscribe({
        next: (res) => {
          this.asignaciones=res;
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
        id: this.asignacionValidate.get('')?.value,
        curso_id: this.asignacionValidate.get('nombre_curso')?.value,
        user_id: this.asignacionValidate.get('intensidad_horaria')?.value,
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

  public redirecTo(url:string){
    this.router.navigate([url]);
  }
}
