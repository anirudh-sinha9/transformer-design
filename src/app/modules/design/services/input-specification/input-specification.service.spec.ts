import { TestBed } from '@angular/core/testing';

import { InputSpecificationService } from './input-specification.service';

describe('InputSpecificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputSpecificationService = TestBed.get(InputSpecificationService);
    expect(service).toBeTruthy();
  });
});
