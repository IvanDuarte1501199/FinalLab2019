import { TestBed } from '@angular/core/testing';

import { ProfesorRepoService } from './profesor-repo.service';

describe('ProfesorRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfesorRepoService = TestBed.get(ProfesorRepoService);
    expect(service).toBeTruthy();
  });
});
