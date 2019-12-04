import { TestBed } from '@angular/core/testing';

import { CursoAlumnoRepoService } from './curso-alumno-repo.service';

describe('CursoAlumnoRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursoAlumnoRepoService = TestBed.get(CursoAlumnoRepoService);
    expect(service).toBeTruthy();
  });
});
