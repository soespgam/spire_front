import {login} from'../interface/login.interface';

import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { respLogin } from '../interface/responseLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
  }

  public UserStorage=JSON.parse(
    sessionStorage.getItem('usuariok')!
  );

  public login(user: login): Observable<Object> {
    return this.http.post<Object>('http://127.0.0.1:8000/api/login', user); 
  }

  public get_perfil():Observable<respLogin>{
    let headers = new HttpHeaders()
   
    .set("Authorization",'Bearer '+ this.UserStorage.ascces_token)
    .set("Access-Control-Allow-Origin","*")
    .set('Content-Type', 'application/json')

    return this.http.get<respLogin>('http://127.0.0.1:8000/api/profile_user',{
      headers
    });
  }
}
