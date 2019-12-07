import { Injectable } from '@angular/core';
import { profesor } from '../modelo/profesor';
import { HttpClient } from '@angular/common/http';
import { CursosRepoService } from './cursos-repo.service';

@Injectable({
  providedIn: 'root'
})
export class ProfesorRepoService {
  listadoProfesores: profesor[] = [];
  devolverProfesor: profesor;
  constructor(private _httpClient: HttpClient,private _cursoRepoService:CursosRepoService) { }

  getAllProfesores() {
    this._httpClient.get<profesor[]>('http://localhost:4000/api/profesores')
    .subscribe(
      (data) => this.listadoProfesores = data
    );
  }
  devolverProfesores() {
    this._httpClient.get<profesor[]>('http://localhost:4000/api/profesores')
    .subscribe(
      (data) => this.listadoProfesores = data
    );
    return this.listadoProfesores;
  }
 
  getProfesorById(profesorId: number) {
    return this._httpClient.get<profesor>(`http://localhost:4000/api/profesores/${profesorId}`);
  }

  agregarProfesor(nuevoProfesor: profesor) {
    return this._httpClient.post('http://localhost:4000/api/profesores',  nuevoProfesor);
  }

  borrarProfesor(profesorId: number) {
    return this._httpClient.delete(`http://localhost:4000/api/profesores/${profesorId}`);
  }

  actualizarProfesor(profesor: profesor){
    return this._httpClient.put(`http://localhost:4000/api/profesores/${profesor.id}`, profesor);
  }


}
