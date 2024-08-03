import { TestBed } from '@angular/core/testing';

import { NghesiService } from './nghesi.service';

describe('NghesiService', () => {
  let service: NghesiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NghesiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
