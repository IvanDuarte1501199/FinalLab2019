import { Component, OnInit } from '@angular/core';
import { CursosRepoService } from 'src/app/servicios/cursos-repo.service';
import { curso } from 'src/app/modelo/curso';
import { curso_alumno } from 'src/app/modelo/curso_alumno';
import { CursoAlumnoRepoService } from 'src/app/servicios/curso-alumno-repo.service';
import { alumno } from 'src/app/modelo/alumno';
import { ProfesorRepoService } from 'src/app/servicios/profesor-repo.service';
import { profesor } from 'src/app/modelo/profesor';

@Component({
  selector: 'app-cursos-alumnos',
  templateUrl: './cursos-alumnos.component.html',
  styleUrls: ['./cursos-alumnos.component.css']
})
export class CursosAlumnosComponent implements OnInit {

  listadoCursos: curso[] = [];

  nuevoAlumnoDeCurso: curso_alumno = new curso_alumno(null, null);
  cursoElegido: curso = new curso('', null, null, null, null);
  profesorDelCurso: profesor = new profesor(null,'','',null);
  alumnoDelCurso: alumno = new alumno(null, '', '', null);

  constructor(private _cursoRepoService: CursosRepoService, private _cursoAlumnoRepoService: CursoAlumnoRepoService,
    private _profesorRepoService: ProfesorRepoService) {
    this.listadoCursos = this._cursoRepoService.devolverCursos();
  }

  ngOnInit() {
  }

  verProfesor() {
    //tira error el primer profe
    console.log("entro al metodo");
    this._profesorRepoService.getProfesorById(this.cursoElegido.profesorId).subscribe(
      data => { this.profesorDelCurso = data }
    );
  }

  cambiarCurso() {
    console.log("entro al metodo");
    this._cursoRepoService.getCursoById(this.nuevoAlumnoDeCurso.cursoId).subscribe(
      data => { this.cursoElegido = data }
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
