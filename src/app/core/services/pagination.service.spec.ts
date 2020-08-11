import { TestBed } from '@angular/core/testing';

import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;
  let dummyService = {
    dummyMethod: jasmine.createSpy(),
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService],
    });
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve the page correctly', () => {
    service.getPage(dummyService.dummyMethod, { a: 3, b: 4 }, { param: 5 }, 2);
    expect(dummyService.dummyMethod).toHaveBeenCalledWith(
      {
        a: 3,
        b: 4,
      },
      {
        param: 5,
        page: 2,
      }
    );
  });
});
