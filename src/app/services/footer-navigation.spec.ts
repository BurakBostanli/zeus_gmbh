import { TestBed } from '@angular/core/testing';

import { FooterNavigation } from './footer-navigation';

describe('FooterNavigation', () => {
  let service: FooterNavigation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterNavigation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
