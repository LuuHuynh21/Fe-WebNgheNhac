import { TestBed } from '@angular/core/testing';

import { TheloaiService } from './theloai.service';

describe('TheloaiService', () => {
  let service: TheloaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheloaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
