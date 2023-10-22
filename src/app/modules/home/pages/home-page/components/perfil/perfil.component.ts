import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { usuario } from 'src/app/modules/usuarios/interface/usuario.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  public perfil: usuario;
  
  constructor(private router:Router) {
    this.perfil = {
      nombre: '',
      correo: '',
      password:'',
      telefono: 0,
      rol: ''
    }
    
  }

  public ngOnInit() {
    this.profile();
  }

  public redirecTo(url:string){
    this.router.navigate([url]);
  }

  public profile(): void {
    this.perfil = JSON.parse(localStorage.getItem('user_auth')!)
  }

}
