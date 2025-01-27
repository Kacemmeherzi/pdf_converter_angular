import { TestBed } from '@angular/core/testing';

import { ElectronservicesService } from './electronservices.service';

describe('ElectronservicesService', () => {
  let service: ElectronservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
