import { TestBed } from '@angular/core/testing';

import { ServeceService } from './servece.service';

describe('ServeceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServeceService = TestBed.get(ServeceService);
    expect(service).toBeTruthy();
  });
});
