import { TestBed } from '@angular/core/testing';

import { DataForoService } from './data-foro.service';

describe('DataForoService', () => {
  let service: DataForoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataForoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
