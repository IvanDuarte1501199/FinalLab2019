import { Injectable } from '@angular/core';
import { alumno } from '../modelo/alumno';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlumnoRepoService {

  listadoAlumnos: alumno[] = [];

  constructor(private _httpClient: HttpClient) { }

  getAllAlumnos() {
    this._httpClient.get<alumno[]>('http://localhost:4000/api/clientes')
    .subscribe(
      (data) => this.listadoAlumnos = data
    );
  }
 
  getAlumnoById(clienteDni: number) {
    return this._httpClient.get<alumno>(`http://localhost:4000/api/clientes/${clienteDni}`);
  }

  agregarAlumno(nuevoAlumno: alumno) {
    return this._httpClient.post('http://localhost:4000/api/clientes', nuevoAlumno);
  }

  borrarAlumno(clienteDni: number) {
    return this._httpClient.delete(`http://localhost:4000/api/clientes/${clienteDni}`);
  }

  actualizarAlumno(alumno: alumno){
    return this._httpClient.put(`http://localhost:4000/api/clientes/${alumno.dni}`, alumno);
  }
}
