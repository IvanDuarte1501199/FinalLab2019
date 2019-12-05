import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/modelo/alumno';
import { AlumnoRepoService } from 'src/app/servicios/alumno-repo.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  alumnoSeleccionado: alumno;
  busqueda: string = "";
  constructor(private _alumnoRepoService: AlumnoRepoService) { }

  ngOnInit() {
    this._alumnoRepoService.getAllAlumnos();
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
