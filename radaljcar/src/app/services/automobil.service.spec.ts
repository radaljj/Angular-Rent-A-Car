import { TestBed } from '@angular/core/testing';

import { AutomobilService } from './automobil.service';

describe('AutomobilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutomobilService = TestBed.get(AutomobilService);
    expect(service).toBeTruthy();
  });
});
