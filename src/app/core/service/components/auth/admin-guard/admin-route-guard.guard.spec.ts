import { TestBed } from '@angular/core/testing';

import { AdminRouteGuardGuard } from './admin-route-guard.guard';

describe('AdminRouteGuardGuard', () => {
  let guard: AdminRouteGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminRouteGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
