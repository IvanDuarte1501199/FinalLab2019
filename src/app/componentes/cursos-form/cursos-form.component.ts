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

  edicion: boolean = false;
  dd: string;
  mm: string ;
  yyyy: string;
  set_date: string;
  nuevoCurso: curso = new curso('', new Date(this.set_date), new Date(this.set_date), null, null);
  constructor(private _cursoRepoService: CursosRepoService, private _profesorRepoService: ProfesorRepoService) {
    this._profesorRepoService.devolverProfesores();
    this.setFecha();
  }

  ngOnInit() {  
  }
  setFecha() {
    //console.log(date.toLocaleDateString());
    this.dd = new Date().getDate().toString();
    this.mm = (new Date().getMonth() + 1).toString();
    this.yyyy = new Date().getFullYear().toString();
    if (parseInt(this.dd) < 10) {
      this.dd = '0' + this.dd
    }
    if (parseInt(this.mm) < 10) {
      this.mm = '0' + this.mm
    }
    this.set_date = this.yyyy + '-' + this.mm + '-' + this.dd;
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
