import { TestBed } from '@angular/core/testing';

import { TopbaihatService } from './topbaihat.service';

describe('TopbaihatService', () => {
  let service: TopbaihatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopbaihatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
