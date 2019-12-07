import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/modelo/curso';
import { CursosRepoService } from 'src/app/servicios/cursos-repo.service';
import { ProfesorRepoService } from 'src/app/servicios/profesor-repo.service';
import { profesor } from 'src/app/modelo/profesor';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {



  nuevoCurso: curso = new curso('', null, null, null, null);
  edicion: boolean = false;
  dd: number = new Date().getDate();
  mm: number = new Date().getMonth() + 1;
  yyyy: number = new Date().getFullYear();
  dd_mm_yyyy: string;
  yyyy_mm_dd: string;
  constructor(private _cursoRepoService: CursosRepoService, private _profesorRepoService: ProfesorRepoService) {
    this._profesorRepoService.devolverProfesores();
  }

  ngOnInit() {
  }
  setFechaInicio() {
    this.dd_mm_yyyy = this.dd.toString() + this.mm.toString() + this.yyyy.toString();
    this.yyyy_mm_dd = this.yyyy.toString() + '-' + (this.mm - 1).toString() + '-' + this.dd.toString();
    console.log(this.dd.toString() + this.mm.toString() + this.yyyy.toString());
    document.getElementById("inputFechaInicio").setAttribute("value", this.yyyy_mm_dd);
  }

  grabarCurso() {
    if ((this.nuevoCurso.profesorId === null) || (this.nuevoCurso.fechaInicio > this.nuevoCurso.fechaFin) || (this.nuevoCurso.nombre === '') || (this.nuevoCurso.profesorId === this.nuevoCurso.profesorauxId)) {
      alert("Complete los campos correctamente");
    } else {
      if (this.edicion) {
        this._cursoRepoService.actualizarCurso(this.nuevoCurso)
          .subscribe(
            (response) => {
              this.edicion = false;
              this.nuevoCurso = new curso('', null, null, null, null);
              this._cursoRepoService.getAllCursos();
            }
          );
      } else {
        this._cursoRepoService.agregarCurso(this.nuevoCurso)
          .subscribe((response) => {
            console.log('se creo el curso: ', response);
            this.nuevoCurso = new curso('', null, null, null, null);
            this._cursoRepoService.getAllCursos();
          });
      }
    }
  }

  editarCurso(cursoId: number) {
    this._cursoRepoService.getCursoById(cursoId)
      .subscribe(
        (alu) => {
          this.nuevoCurso = alu;
          this.edicion = true;
        }
      );
  }
}
