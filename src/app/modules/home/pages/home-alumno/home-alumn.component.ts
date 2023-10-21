import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/usuarios/service/login.service';
import { AsignacionesService } from '../../service/asignaciones/asignaciones.service';
import { usuario } from 'src/app/modules/usuarios/interface/usuario.interface';

@Component({
  selector: 'app-home-alumn',
  templateUrl: './home-alumn.component.html',
  styleUrls: ['./home-alumn.component.scss']
})
export class HomeAlumnComponent {
  public perfil: usuario;
  public cursosUser: any;

  constructor(public loginService: LoginService, private router: Router, public asignacionesService: AsignacionesService) {
    this.perfil = {
      nombre: '',
      correo: '',
      password:'',
      telefono: 0,
      rol: ''
    }
    this.cursosUser = [];
  }
  public async ngOnInit() {
    this.profile();
  }

  public redirecTo(url: string) {
    this.router.navigate([url]);
  }

  public profile(): void {
    this.perfil = JSON.parse(localStorage.getItem('user_auth')!)
  }

  public get_asignaciones_user(user_id: any) {
    try {
      this.asignacionesService.asignacion_usuario(user_id).subscribe({
        next: (res) => {
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

  public logout() {
    sessionStorage.removeItem("usuariok");
    this.router.navigate(['home/login']);
  }
}
