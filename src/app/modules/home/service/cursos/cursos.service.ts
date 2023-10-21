import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { curso } from '../../interface/curso.interface';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private http: HttpClient) { }

  public create_curso(curso:curso):Observable<curso>{
    return this.http.post<curso>('http://127.0.0.1:8000/api/create_curso',curso);
  }

  public get_cursos():Observable<curso[]>{
    return this.http.get<curso[]>('http://127.0.0.1:8000/api/cursos');  
  }

  public get_curso(curso_id:any):Observable<curso>{
    return this.http.get<curso>(`http://127.0.0.1:8000/api/curso/${curso_id}`);
  }
  
  public edit_curso(curso:curso):Observable<curso>{
    return this.http.post<curso>('http://127.0.0.1:8000/api/update',curso);
  }

  public delete_curso(curso_id:any):Observable<curso>{
    return this.http.delete<curso>(`http://127.0.0.1:8000/api/curso/${curso_id}`);
  }
  //asignacion
}
