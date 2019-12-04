import { Component, OnInit } from '@angular/core';
import { curso } from 'src/app/modelo/curso';
import { CursosRepoService } from 'src/app/servicios/cursos-repo.service';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {

 cursoSeleccionado: curso;

  constructor(private _cursoRepoService: CursosRepoService) { }

  ngOnInit() {
    this._cursoRepoService.getAllCursos();
  }

  obtenerCurso(cursoId: number) {
    this._cursoRepoService.getCursoById(cursoId)
    .subscribe((alu) => {
      this.cursoSeleccionado = alu;
    });
  }

  borrarCurso(cursoId: number) {
    this._cursoRepoService.borrarCurso(cursoId)
    .subscribe((response) => {
      console.log('se borro el curso ', response);
      this._cursoRepoService.getAllCursos();
    });
  }
}
