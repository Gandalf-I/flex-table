import { TestBed } from '@angular/core/testing';

import { OnlyAuthGuard } from './only-auth.guard';

describe('OnlyAuthGuard', () => {
  let guard: OnlyAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
