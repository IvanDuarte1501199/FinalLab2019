import { Component, OnInit } from '@angular/core';
import { profesor } from 'src/app/modelo/profesor';
import { ProfesorRepoService } from 'src/app/servicios/profesor-repo.service';

@Component({
  selector: 'app-profesores-form',
  templateUrl: './profesores-form.component.html',
  styleUrls: ['./profesores-form.component.css']
})
export class ProfesoresFormComponent implements OnInit {

  nuevoProfesor: profesor = new profesor(null,'','',null);
  edicion: boolean = false;
  constructor(private _profesorRepoService: ProfesorRepoService) { }

  ngOnInit() {
  }
  grabarProfesor() {
    if (this.edicion) {
      this._profesorRepoService.actualizarProfesor(this.nuevoProfesor)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevoProfesor = new profesor(null, '', '',null);
            this._profesorRepoService.getAllProfesores();
          }
        );
    } else {
      this._profesorRepoService.agregarProfesor(this.nuevoProfesor)
        .subscribe((response) => {
          console.log('se creo el profesor: ', response);
          this.nuevoProfesor = new profesor(null, '', '',null);
          this._profesorRepoService.getAllProfesores();
        });
    }
  }

  editarProfesor(profesorId: number) {
    this._profesorRepoService.getProfesorById(profesorId)
      .subscribe(
        (alu) => {
          this.nuevoProfesor = alu;
          this.edicion = true;
        }
      );
  }
}
