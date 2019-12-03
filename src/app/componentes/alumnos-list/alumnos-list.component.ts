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

  constructor(private _alumnoRepoService: AlumnoRepoService) { }

  ngOnInit() {
    this._alumnoRepoService.getAllAlumnos();
  }

  obtenerAlumno(alumnoDni: number) {
    this._alumnoRepoService.getAlumnoById(alumnoDni)
    .subscribe((alu) => {
      this.alumnoSeleccionado = alu;
    });
  }

  borrarAlumno(alumnoDni: number) {
    this._alumnoRepoService.borrarAlumno(alumnoDni)
    .subscribe((response) => {
      console.log('se borro el alumno ', response);
      this._alumnoRepoService.getAllAlumnos();
    });
  }
}
