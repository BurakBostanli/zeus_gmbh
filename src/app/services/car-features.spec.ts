import { TestBed } from '@angular/core/testing';

import { CarFeatures } from './car-features';

describe('CarFeatures', () => {
  let service: CarFeatures;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarFeatures);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
