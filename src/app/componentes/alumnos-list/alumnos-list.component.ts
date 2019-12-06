import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/modelo/alumno';
import { AlumnoRepoService } from 'src/app/servicios/alumno-repo.service';
import { curso_alumno } from 'src/app/modelo/curso_alumno';
import { CursoAlumnoRepoService } from 'src/app/servicios/curso-alumno-repo.service';
import { CursosRepoService } from 'src/app/servicios/cursos-repo.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {
  nuevoAlumnoDeCurso: curso_alumno = new curso_alumno(null, null);
  alumnoSeleccionado: alumno;
  busqueda: string = "";
  inscribir: boolean = false;
  constructor(private _cursoRepoService: CursosRepoService, private _alumnoRepoService: AlumnoRepoService, private _cursoAlumnoRepoService: CursoAlumnoRepoService) { }

  ngOnInit() {
    this._alumnoRepoService.getAllAlumnos();
    this._cursoRepoService.getAllCursos();
  }
  InscribirAlumno(alumnoId: number) {
    this.inscribir = true;
    this.nuevoAlumnoDeCurso.alumnoId = alumnoId;
  }

  grabarCursoAlumno(cursoId: number) {
    this.nuevoAlumnoDeCurso.cursoId = cursoId;
    this._cursoAlumnoRepoService.agregarCursoAlumno(this.nuevoAlumnoDeCurso)
      .subscribe((response) => {
        console.log('se creo el alumno: ', response);
        //this.nuevoAlumnoDeCurso = new curso_alumno(null, null);
        this._alumnoRepoService.getAllAlumnos();
        this._cursoRepoService.getAllCursos();
      });
  }

  VerEdicion() {
    this.inscribir = false;
  }

  obtenerAlumno(alumnoId: number) {
    this._alumnoRepoService.getAlumnoById(alumnoId)
      .subscribe((alu) => {
        this.alumnoSeleccionado = alu;
      });
  }

  borrarAlumno(alumnoId: number) {
    this._alumnoRepoService.borrarAlumno(alumnoId)
      .subscribe((response) => {
        console.log('se borro el alumno ', response);
        this._alumnoRepoService.getAllAlumnos();
      });
  }
}
