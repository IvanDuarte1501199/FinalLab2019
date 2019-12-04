import { Injectable } from '@angular/core';
import { curso } from '../modelo/curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursosRepoService {

  listadoCursos: curso[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllCursos() {
    this._httpClient.get<curso[]>('http://localhost:3000/cursos')
    .subscribe(
      (data) => this.listadoCursos = data
    );
  }
 
  getCursoById(cursoId: number) {
    return this._httpClient.get<curso>(`http://localhost:3000/cursos/${cursoId}`);
  }

  agregarCurso(nuevoCurso: curso) {
    return this._httpClient.post('http://localhost:3000/cursos',  nuevoCurso);
  }

  borrarCurso(cursoId: number) {
    return this._httpClient.delete(`http://localhost:3000/cursos/${cursoId}`);
  }

  actualizarCurso(curso: curso){
    return this._httpClient.put(`http://localhost:3000/cursos/${curso.id}`, curso);
  }
}
