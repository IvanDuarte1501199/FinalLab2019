import { TestBed } from '@angular/core/testing';

import { CursosRepoService } from './cursos-repo.service';

describe('CursosRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursosRepoService = TestBed.get(CursosRepoService);
    expect(service).toBeTruthy();
  });
});
