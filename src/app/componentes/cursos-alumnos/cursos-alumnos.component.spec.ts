import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAlumnosComponent } from './cursos-alumnos.component';

describe('CursosAlumnosComponent', () => {
  let component: CursosAlumnosComponent;
  let fixture: ComponentFixture<CursosAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
