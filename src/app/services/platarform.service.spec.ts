import { TestBed } from '@angular/core/testing';

import { PlatarformService } from './platarform.service';

describe('PlatarformService', () => {
  let service: PlatarformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatarformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
