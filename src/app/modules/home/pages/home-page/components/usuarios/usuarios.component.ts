import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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
  public usuarios: any;
  public rol: any;
  public editUsuario: usuario;

  public usuarioValidate: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rol: new FormControl('', [Validators.required])
  });


  constructor(public usuariosService: UsuariosService, private router: Router) {
    this.usuarios = [];
    this.rol = "";
    this.editUsuario = {
      id: 0,
      nombre: '',
      correo: '',
      telefono: 0,
      password: '',
      rol: '',
    };
  }

  public async ngOnInit() {
    this.getUsers();
  }

  //administrtation users
  public getUsers(): void {
    try {
      this.usuariosService.get_Users().subscribe({
        next: (res) => {
          this.usuarios = res;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
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
            Swal.fire({
              icon: "success",
              text: "usuario creado ",
            });
            this.getUsers();
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        icon: "error",
        text: "falta llenar algun campo",
      });
    }
  }
  public getUser(user_id: any): void {
    try {
      this.usuariosService.get_user(user_id).subscribe({
        next: (res) => {
          this.editUsuario = res;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  public updated_user(): void {
    let id_user = this.editUsuario.id

    let user = {
      id: id_user,
      nombre: this.usuarioValidate.get('nombre')?.value,
      correo: this.usuarioValidate.get('correo')?.value,
      telefono: this.usuarioValidate.get('telefono')?.value,
      password: this.usuarioValidate.get('password')?.value,
      rol: this.usuarioValidate.get('rol')?.value,
    };

    if (user.nombre == '' || user.nombre == null) {
      user.nombre = this.editUsuario.nombre;
    }

    if (user.correo == '' || user.correo == null) {
      user.correo = this.editUsuario.correo;
    }

    if (user.telefono == '' || user.telefono == null) {
      user.telefono = this.editUsuario.telefono;
    }

    if (user.password == "" || user.password == null) {
      user.password = this.editUsuario.password;
    }

    if (user.rol == '' || user.rol == null) {
      user.rol = this.editUsuario.rol;
    }

    try {
      this.usuariosService.edit_user(user).subscribe({
        next: (res) => {
          console.log(res);
          Swal.fire({
            icon: "success",
            text: "usuario actualizado ",
          });
          this.getUsers();
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    } catch (error) {
      alert("error" + error);
    }
  }

  public deleteUser(user_id: any): void {
    try {
      this.usuariosService.delete_user(user_id).subscribe({
        next: (res) => {
          Swal.fire({
            icon: "success",
            text: "usuario eliminado ",
          });
          this.getUsers();
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
