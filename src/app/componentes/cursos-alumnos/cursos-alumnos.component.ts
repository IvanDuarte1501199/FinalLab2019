import { Component, OnInit } from '@angular/core';
import { CursosRepoService } from 'src/app/servicios/cursos-repo.service';
import { curso } from 'src/app/modelo/curso';
import { curso_alumno } from 'src/app/modelo/curso_alumno';
import { CursoAlumnoRepoService } from 'src/app/servicios/curso-alumno-repo.service';
import { alumno } from 'src/app/modelo/alumno';
import { ProfesorRepoService } from 'src/app/servicios/profesor-repo.service';
import { profesor } from 'src/app/modelo/profesor';
import { AlumnoRepoService } from 'src/app/servicios/alumno-repo.service';

@Component({
  selector: 'app-cursos-alumnos',
  templateUrl: './cursos-alumnos.component.html',
  styleUrls: ['./cursos-alumnos.component.css']
})
export class CursosAlumnosComponent implements OnInit {

  listadoCursos: curso[] = [];

  nuevoAlumnoDeCurso: curso_alumno = new curso_alumno(null, null);
  cursoElegido: curso = new curso('', null, null, null, null);
  profesorDelCurso: profesor = new profesor(null, '', '', null);
  profesorDelCursoActual: profesor = new profesor(null, '', '', null);
  profesorAuxDelCurso: profesor = new profesor(null, '', '', null);
  alumnosDelCurso: alumno[] = [];

  constructor(private _cursoRepoService: CursosRepoService, private _cursoAlumnoRepoService: CursoAlumnoRepoService,
    private _profesorRepoService: ProfesorRepoService, private _alumnoRepoService: AlumnoRepoService) {
    this.listadoCursos = this._cursoRepoService.devolverCursos();

  }

  ngOnInit() {
  }



  verProfesorActual(profesorId) {
    this._profesorRepoService.getProfesorById(profesorId).subscribe(
      data => { this.profesorDelCursoActual = data }
    );
    return this.profesorDelCursoActual;
  }


  verProfesor(profesorId) {
    this._profesorRepoService.getProfesorById(profesorId).subscribe(
      data => { this.profesorDelCurso = data }
    );
    return this.profesorDelCurso;
  }
  verProfesorAuxiliar(profesorId) {
    this._profesorRepoService.getProfesorById(profesorId).subscribe(
      data => { this.profesorAuxDelCurso = data }
    );
  }

  cambiarCurso(cursoId: number) {
    this._cursoRepoService.getCursoById(cursoId).subscribe(
      data => {
        this.cursoElegido = data;
        this.verProfesor(this.cursoElegido.profesorId);
        if(this.cursoElegido.profesorauxId !== null){
          this.verProfesorAuxiliar(this.cursoElegido.profesorauxId);
        }else{
          this.profesorAuxDelCurso = new profesor(null, '', '', null);
        }
      }
    );


  }

  grabarCursoAlumno() {
    this._cursoAlumnoRepoService.agregarCursoAlumno(this.nuevoAlumnoDeCurso)
      .subscribe((response) => {
        console.log('añadio el alumno al curso: ', response);
        this.nuevoAlumnoDeCurso = new curso_alumno(null, null);
        this._cursoAlumnoRepoService.getAllCursosAlumnos();
      });

  }
}
