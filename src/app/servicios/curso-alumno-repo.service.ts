import { Injectable } from '@angular/core';
import { curso_alumno } from '../modelo/curso_alumno';
import { HttpClient } from '@angular/common/http';
import { alumno } from '../modelo/alumno';

@Injectable({
  providedIn: 'root'
})
export class CursoAlumnoRepoService {

  listadoCursosAlumnos: curso_alumno[] = [];
  listadoAlumnosFiltrado: alumno[] = [];
  
  constructor(private _httpClient: HttpClient) { }

  getAlumnosFiltrados(cursoId: number) {
    this.listadoAlumnosFiltrado = [];
  
    this._httpClient.get<alumno[]>('http://localhost:3000/alumnos')
    .subscribe(
      (data) => {
        
        data.forEach(alu => {
          
          this.listadoCursosAlumnos.forEach(curalu => {
            
            if(curalu.alumnoId === alu.id && curalu.cursoId === cursoId) {
              this.listadoAlumnosFiltrado.push(alu);
            }
          });
        });
      }
    )
    return this.listadoAlumnosFiltrado;
  }


  getAllCursosAlumnos() {
    this._httpClient.get<curso_alumno[]>('http://localhost:3000/cursos_alumno')
    .subscribe(
      (data) => this.listadoCursosAlumnos = data
    );
  }
  
  devolverCursosAlumnos() {
    this._httpClient.get<curso_alumno[]>('http://localhost:3000/cursos_alumno')
    .subscribe(
      (data) => this.listadoCursosAlumnos = data
    );
    return this.listadoCursosAlumnos;
  }
 
  getCursoAlumnoById(cursoalumnoId: number) {
    return this._httpClient.get<curso_alumno>(`http://localhost:3000/cursos_alumno/${cursoalumnoId}`);
  }

  agregarCursoAlumno(nuevoCursoAlumno: curso_alumno) {
    return this._httpClient.post('http://localhost:3000/cursos_alumno',  nuevoCursoAlumno);
  }

  borrarCursoAlumno(cursoalumnoId: number) {
    return this._httpClient.delete(`http://localhost:3000/cursos_alumno/${cursoalumnoId}`);
  }

  actualizarCursoAlumno(curso: curso_alumno){
    return this._httpClient.put(`http://localhost:3000/cursos_alumno/${curso.id}`, curso);
  }
}
