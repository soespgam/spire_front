import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logout } from '../interface/logout.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  
  public UserStorage=JSON.parse(
    sessionStorage.getItem('usuariok')!
  );

  /* public logout():Observable<logout>{
    let headers = new HttpHeaders()
   
    .set("Authorization",'Bearer '+ this.UserStorage.ascces_token)
    .set("Access-Control-Allow-Origin","*")
    .set('Content-Type', 'application/json')

    return this.http.get<logout>('http://127.0.0.1:8000/api/logout',{
      headers
    });
  } */

 


}
