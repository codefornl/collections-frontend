import { TestBed } from '@angular/core/testing';

import { CbaseService } from './cbase.service';

describe('CbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CbaseService = TestBed.get(CbaseService);
    expect(service).toBeTruthy();
  });
});
