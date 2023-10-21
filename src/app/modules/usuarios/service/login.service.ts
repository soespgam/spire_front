import {login} from'../interface/login.interface';

import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ResToken, respLogin } from '../interface/responseLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
  }

  public UserStorage=JSON.parse(
    sessionStorage.getItem('usuariok')!
  );

  public login(user: login): Observable<ResToken> {
    return this.http.post<ResToken>('http://127.0.0.1:8000/api/login', user); 
  }

  public get_perfil(token:string):Observable<respLogin>{
    let headers = new HttpHeaders()
   
    .set("Authorization",'Bearer '+ token)
    .set("Access-Control-Allow-Origin","*")
    .set('Content-Type', 'application/json')

    return this.http.get<respLogin>('http://127.0.0.1:8000/api/profile_user',{
      headers
    });
  }
}
