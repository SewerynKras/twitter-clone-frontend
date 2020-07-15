import { ListResponse } from './../../shared/models/response.model';
import { environment } from './../../../environments/environment';
import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pagination.service';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('PaginationService', () => {
  let service: PaginationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaginationService],
    });
    service = TestBed.inject(PaginationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the page correctly', () => {
    service
      .getPage(`${environment.backendURL}/endpoint/`, 2)
      .subscribe((response) => {
        expect(response).toEqual(data);
      });

    let data: ListResponse<any> = {
      count: 1,
      next: 3,
      previous: 1,
      results: [],
    };
    const req = httpMock.expectOne(
      `${environment.backendURL}/endpoint/?page=2`
    );
    expect(req.request.method).toBe('GET');
    req.flush(data);
  });
});
