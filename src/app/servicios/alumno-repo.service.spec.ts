import { TestBed } from '@angular/core/testing';

import { AlumnoRepoService } from './alumno-repo.service';

describe('AlumnoRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoRepoService = TestBed.get(AlumnoRepoService);
    expect(service).toBeTruthy();
  });
});
