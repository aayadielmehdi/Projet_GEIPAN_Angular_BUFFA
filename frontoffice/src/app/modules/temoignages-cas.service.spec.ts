import { TestBed } from '@angular/core/testing';

import { TemoignagesCasService } from './temoignages-cas.service';

describe('TemoignagesCasService', () => {
  let service: TemoignagesCasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemoignagesCasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
