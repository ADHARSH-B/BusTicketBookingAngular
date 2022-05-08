import { TestBed } from '@angular/core/testing';

import { JwtInterceptorsInterceptor } from './jwt-interceptors.interceptor';

describe('JwtInterceptorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInterceptorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtInterceptorsInterceptor = TestBed.inject(JwtInterceptorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
