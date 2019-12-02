import { Component, OnInit } from '@angular/core';
import { alumno } from 'src/app/modelo/alumno';
import { AlumnoRepoService } from 'src/app/servicios/alumno-repo.service';


@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {
  
  nuevoAlumno: alumno = new alumno(null,'','','');
  edicion: boolean = false;
  constructor(private _alumnoRepoService: AlumnoRepoService) { }

  ngOnInit() {
  }
  grabarCliente() {
    if (this.edicion) {
      this._alumnoRepoService.actualizarAlumno(this.nuevoAlumno)
        .subscribe(
          (response) => {
            this.edicion = false;
            this.nuevoAlumno = new alumno(null, '', '','');
            this._alumnoRepoService.getAllAlumnos();
          }
        );
    } else {
      this._alumnoRepoService.agregarAlumno(this.nuevoAlumno)
        .subscribe((response) => {
          console.log('se creo el cliente: ', response);
          this.nuevoAlumno = new alumno(null, '', '','');
          this._alumnoRepoService.getAllAlumnos();

        });
    }
  }

  editarCliente(clienteId: number) {
    this._alumnoRepoService.getAlumnoById(clienteId)
      .subscribe(
        (alu) => {
          this.nuevoAlumno = alu;
          this.edicion = true;
        }
      );
  }
}
