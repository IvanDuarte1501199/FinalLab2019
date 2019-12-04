import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlumnosFormComponent } from './componentes/alumnos-form/alumnos-form.component';
import { AlumnosListComponent } from './componentes/alumnos-list/alumnos-list.component';
import { ProfesoresListComponent } from './componentes/profesores-list/profesores-list.component';
import { ProfesoresFormComponent } from './componentes/profesores-form/profesores-form.component';
import { PantallaPrincipalComponent } from './componentes/pantalla-principal/pantalla-principal.component';
import { CursosFormComponent } from './componentes/cursos-form/cursos-form.component';
import { CursosListComponent } from './componentes/cursos-list/cursos-list.component';
import { CursosAlumnosComponent } from './componentes/cursos-alumnos/cursos-alumnos.component';

const rutas: Routes = [
  {path: 'alumnos-form', component: AlumnosFormComponent },
  {path: 'alumnos-list', component: AlumnosListComponent },
  {path: 'profesores-list', component: ProfesoresListComponent },
  {path: 'profesores-form', component: ProfesoresFormComponent },
  {path: 'cursos-list', component: CursosListComponent },
  {path: 'cursos-form', component: CursosFormComponent },
  {path: 'cursos-alumnos', component: CursosAlumnosComponent },
  {path: '', component: PantallaPrincipalComponent }
  ];



@NgModule({
  declarations: [
    AppComponent,
    AlumnosFormComponent,
    AlumnosListComponent,
    ProfesoresListComponent,
    ProfesoresFormComponent,
    PantallaPrincipalComponent,
    CursosFormComponent,
    CursosListComponent,
    CursosAlumnosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
