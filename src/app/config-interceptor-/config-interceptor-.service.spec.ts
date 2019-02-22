import { TestBed } from '@angular/core/testing';

import { ConfigInterceptorService } from './config-interceptor-.service';

describe('ConfigInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigInterceptorService = TestBed.get(ConfigInterceptorService);
    expect(service).toBeTruthy();
  });
});
