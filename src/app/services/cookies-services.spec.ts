import { TestBed } from '@angular/core/testing';

import { CookiesServices } from './cookies-services';

describe('CookiesServices', () => {
  let service: CookiesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookiesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
