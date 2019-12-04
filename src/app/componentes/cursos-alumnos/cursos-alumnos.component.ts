import { Component, OnInit } from '@angular/core';
import { CursosRepoService } from 'src/app/servicios/cursos-repo.service';
import { curso } from 'src/app/modelo/curso';
import { curso_alumno } from 'src/app/modelo/curso_alumno';
import { CursoAlumnoRepoService } from 'src/app/servicios/curso-alumno-repo.service';
import { alumno } from 'src/app/modelo/alumno';

@Component({
  selector: 'app-cursos-alumnos',
  templateUrl: './cursos-alumnos.component.html',
  styleUrls: ['./cursos-alumnos.component.css']
})
export class CursosAlumnosComponent implements OnInit {

  listadoCursos: curso[] = [];
  
  nuevoAlumnoDeCurso: curso_alumno = new curso_alumno(null, null);
  cursoElegido: curso = new curso('', null, null, null, null);
  alumnoDelCurso: alumno = new alumno(null,'','',null);

  constructor(private _cursoRepoService: CursosRepoService, private _cursoAlumnoRepoService: CursoAlumnoRepoService) {
    this.listadoCursos = this._cursoRepoService.devolverCursos();
  }

  ngOnInit() {
  }

  cambiarCurso() {
    console.log("entro al metodo");
    console.log(this.nuevoAlumnoDeCurso.cursoId);
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
