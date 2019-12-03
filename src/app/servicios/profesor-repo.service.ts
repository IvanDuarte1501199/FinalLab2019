import { Injectable } from '@angular/core';
import { profesor } from '../modelo/profesor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesorRepoService {
  listadoProfesores: profesor[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllProfesores() {
    this._httpClient.get<profesor[]>('http://localhost:3000/profesores')
    .subscribe(
      (data) => this.listadoProfesores = data
    );
  }
 
  getProfesorById(profesorDni: number) {
    return this._httpClient.get<profesor>(`http://localhost:3000/profesores/${profesorDni}`);
  }

  agregarProfesor(nuevoProfesor: profesor) {
    return this._httpClient.post('http://localhost:3000/profesores',  nuevoProfesor);
  }

  borrarProfesor(profesorDni: number) {
    return this._httpClient.delete(`http://localhost:3000/profesores/${profesorDni}`);
  }

  actualizarProfesor(profesor: profesor){
    return this._httpClient.put(`http://localhost:3000/profesores/${profesor.dni}`, profesor);
  }
}
