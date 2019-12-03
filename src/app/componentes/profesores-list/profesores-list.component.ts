import { Component, OnInit } from '@angular/core';
import { profesor } from 'src/app/modelo/profesor';
import { ProfesorRepoService } from 'src/app/servicios/profesor-repo.service';

@Component({
  selector: 'app-profesores-list',
  templateUrl: './profesores-list.component.html',
  styleUrls: ['./profesores-list.component.css']
})
export class ProfesoresListComponent implements OnInit {

  profesorSeleccionado: profesor;

  constructor(private _profesorRepoService: ProfesorRepoService) { }

  ngOnInit() {
    this._profesorRepoService.getAllProfesores();
  }

  obtenerProfesor(alumnoId: number) {
    this._profesorRepoService.getProfesorById(alumnoId)
    .subscribe((alu) => {
      this.profesorSeleccionado = alu;
    });
  }

  borrarProfesor(alumnoId: number) {
    this._profesorRepoService.borrarProfesor(alumnoId)
    .subscribe((response) => {
      console.log('se borro el profesor ', response);
      this._profesorRepoService.getAllProfesores();
    });
  }
}
