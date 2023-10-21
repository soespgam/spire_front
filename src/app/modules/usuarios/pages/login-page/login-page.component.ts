import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { login } from '../../interface/login.interface';

///import { UsuariosService } from '../../service/service-usuarios.service';
import { LoginService } from '../../service/login.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  public loginUser: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });


  constructor(public  loginService: LoginService ,private router: Router) { }

  public async ngOnInit(){ }


  public  login(): void {
    if(this.loginUser.valid){
      try {
        let user: login = {
          correo:  this.loginUser.get('correo')?.value,
          password: this.loginUser.get('password')?.value
        };
        this.loginService.login(user).subscribe({
          next:(res)=>{
            console.log("desdelogin",res);
            sessionStorage.setItem("usuariok",JSON.stringify(res))
            this.profile(res.ascces_token);
          },
          error:(error:any)=>{
            console.log(error);
          }
        });
        
      } catch (error) {
        alert("error"+ error );
      }
    }else{
      alert('hay campos vacios');
    }
  }

  public  profile(token:string):void{
    this.loginService.get_perfil(token).subscribe({
      next:(res)=>{
        localStorage.setItem("user_auth",JSON.stringify(res.data));
        let rol= res.data.rol;
        console.log("rol actual",rol);
        if(rol == "ADMIN"){
          this.router.navigate(['home/homeAdmin']);
        }
        
        if(rol == "ALUMNO"){
               this.router.navigate(['home/homeAlumn']);
        }
      },
      error:(error:any)=>{
        console.log(error);
      }
    });
  }



}
