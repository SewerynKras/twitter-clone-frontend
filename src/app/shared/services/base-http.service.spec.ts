import { httpRequestParams } from './../models/http.model';
import { TestBed } from '@angular/core/testing';

import { BaseHttpService } from './base-http.service';

describe('BaseHttpService', () => {
  let service: BaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle multiple parameters correctly', () => {
    let params: httpRequestParams = {
      foo: 'bar',
      baz: 'qux',
    };
    const results = service.handleParams(params);
    expect(results).toEqual('?foo=bar&baz=qux');
  });

  it('should handle no parameters correctly', () => {
    let params: httpRequestParams = {};
    const results = service.handleParams(params);
    expect(results).toEqual('');
  });
});
