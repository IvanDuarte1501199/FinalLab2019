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
    this._httpClient.get<alumno[]>('http://localhost:3000/alumnos')
    .subscribe(
      (data) => this.listadoAlumnos = data
    );
  }
 
  getAlumnoById(alumnoDni: number) {
    return this._httpClient.get<alumno>(`http://localhost:3000/alumnos/${alumnoDni}`);
  }

  agregarAlumno(nuevoAlumno: alumno) {
    return this._httpClient.post('http://localhost:3000/alumnos',  nuevoAlumno);
  }

  borrarAlumno(alumnoDni: number) {
    return this._httpClient.delete(`http://localhost:3000/alumnos/${alumnoDni}`);
  }

  actualizarAlumno(alumno: alumno){
    return this._httpClient.put(`http://localhost:3000/alumnos/${alumno.dni}`, alumno);
  }
}
