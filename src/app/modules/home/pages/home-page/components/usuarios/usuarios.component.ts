import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/modules/usuarios/service/service-usuarios.service';
import { usuario } from 'src/app/modules/usuarios/interface/usuario.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  public usuarios:any;

  public usuarioValidate: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required])
  });


  constructor(public usuariosService: UsuariosService, private router: Router) {
    this.usuarios=[];
  }

  public async ngOnInit() {
    this.getUsers();
  }

  //administrtation users
  public getUsers(): void {
    try {
      this.usuariosService.get_Users().subscribe({
        next: (res) => {
          this.usuarios =res;
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
          this.usuarios = res;
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
        nombre: this.usuarioValidate.get('nombre')?.value,
        correo: this.usuarioValidate.get('correo')?.value,
        telefono: this.usuarioValidate.get('telefono')?.value,
        password: this.usuarioValidate.get('password')?.value,
        rol: this.usuarioValidate.get('rol')?.value,
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
  public redirecTo(url:string){
    this.router.navigate([url]);
  }

}
