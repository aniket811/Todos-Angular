import { TestBed } from '@angular/core/testing';

import { LogginginService } from './loggingin.service';

describe('LogginginService', () => {
  let service: LogginginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogginginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
