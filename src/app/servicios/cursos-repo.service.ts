import { Injectable } from '@angular/core';
import { curso } from '../modelo/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosRepoService {

  listadoCursos: curso[] = [];
  cursoElegido: curso = new curso('',null,null,null,null);
  constructor(private _httpClient: HttpClient) { }

  getAllCursos() {
    this._httpClient.get<curso[]>('http://localhost:4000/api/cursos')
    .subscribe(
      (data) => this.listadoCursos = data
    );
  }
  
  devolverCursos() {
    this._httpClient.get<curso[]>('http://localhost:4000/api/cursos')
    .subscribe(
      (data) => this.listadoCursos = data
    );
    return this.listadoCursos;
  }
 
  getCursoById(cursoId: number) {
    return this._httpClient.get<curso>(`http://localhost:4000/api/cursos/${cursoId}`);
    
  }

  agregarCurso(nuevoCurso: curso) {
    return this._httpClient.post('http://localhost:4000/api/cursos',  nuevoCurso);
  }

  borrarCurso(cursoId: number) {
    return this._httpClient.delete(`http://localhost:4000/api/cursos/${cursoId}`);
  }

  actualizarCurso(curso: curso){
    return this._httpClient.put(`http://localhost:4000/api/cursos/${curso.id}`, curso);
  }
}
