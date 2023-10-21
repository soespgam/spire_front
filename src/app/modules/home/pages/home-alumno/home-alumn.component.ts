import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/usuarios/service/login.service';
import { AsignacionesService } from '../../service/asignaciones/asignaciones.service';

@Component({
  selector: 'app-home-alumn',
  templateUrl: './home-alumn.component.html',
  styleUrls: ['./home-alumn.component.scss']
})
export class HomeAlumnComponent {
  public perfil: any;
  public cursosUser: any;

  constructor(public loginService: LoginService, private router: Router, public asignacionesService: AsignacionesService) {
    this.perfil = [];
    this.cursosUser = [];
  }
  public async ngOnInit() {
    this.profile();
  }

  public profile(): void {
    this.loginService.get_perfil().subscribe({
      next: (res) => {
        this.perfil = {
          "nombre": res.data.nombre,
          "correo": res.data.correo,
          "telefono": res.data.telefono,
          "rol": res.data.rol
        };
        let userId=res.data.id;
        this.get_asignaciones_user(userId);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public get_asignaciones_user(user_id: any) {
    try {
      this.asignacionesService.asignacion_usuario(user_id).subscribe({
        next: (res) => {
          //console.log("la lista", res);
          this.cursosUser = res
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }

  public logout(){
    sessionStorage.removeItem("usuariok");
    this.router.navigate(['home/login']);
  }
}
