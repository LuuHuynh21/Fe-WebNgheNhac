import { TestBed } from '@angular/core/testing';

import { BaihatService } from './baihat.service';

describe('BaihatService', () => {
  let service: BaihatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaihatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
