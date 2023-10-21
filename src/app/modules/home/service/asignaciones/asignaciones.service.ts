import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { asignacion } from '../../interface/asignacion.interface';
import { asignacionUser } from '../../interface/assingUser.interface';

@Injectable({
  providedIn: 'root'
})
export class AsignacionesService {

  constructor(private http: HttpClient) { }

  public create_asignacion(asignacion:asignacion):Observable<asignacion>{
    return this.http.post<asignacion>('http://127.0.0.1:8000/api/create',asignacion);
  }

  public get_asignaciones():Observable<asignacion[]>{
    return this.http.get<asignacion[]>('http://127.0.0.1:8000/api/assignments');  
  }

  public get_asignacion(asignacion_id:any):Observable<asignacion>{
    return this.http.get<asignacion>(`http://127.0.0.1:8000/api/assignation/${asignacion_id}`);
  }

  public edit_asignacion(asignacion:asignacion):Observable<asignacion>{
    return this.http.post<asignacion>('http://127.0.0.1:8000/api/update_assignation',asignacion);
  }

  public delete_asignacion(asignacion_id:any):Observable<asignacion>{
    return this.http.delete<asignacion>(`http://127.0.0.1:8000/api/assignation/${asignacion_id}`);
  }

  public asignacion_usuario(user_id:any):Observable<asignacionUser>{
    return this.http.get<asignacionUser>(`http://127.0.0.1:8000/api/assignation_by_user/${user_id}`);
  }

}
