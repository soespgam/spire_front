import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { usuario } from '../interface/usuario.interface';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { 
  }

  public get_Users():Observable<usuario[]>{
    return this.http.get<usuario[]>('http://127.0.0.1:8000/api/usuarios');  
  }

  public get_user(user_id:any):Observable<usuario>{
    return this.http.get<usuario>(`http://127.0.0.1:8000/api/user/${user_id}`);
  }

  public edit_user(user:usuario):Observable<usuario>{
    return this.http.post<usuario>('http://127.0.0.1:8000/api/update_usuario',user);
  }

  public create_user(user:usuario):Observable<usuario>{
    return this.http.post<usuario>('http://127.0.0.1:8000/api/register',user);
  }

  public delete_user(user_id:any):Observable<usuario>{
    return this.http.delete<usuario>(`http://127.0.0.1:8000/api/user/${user_id}`);
  }

}
