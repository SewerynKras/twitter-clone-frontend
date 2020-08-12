import { TestBed } from '@angular/core/testing';

import { HeaderTitleService } from './header-title.service';

describe('HeaderTitleService', () => {
  let service: HeaderTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an init value', () => {
    service.titleChange.subscribe((title) => {
      expect(title).toEqual('Twitter');
    });
  });

  it('should emit the observable with a new title', () => {
    spyOn(service['titleChangeSource'], 'next');
    service.changeTitle('New Title!');
    expect(service['titleChangeSource'].next).toHaveBeenCalledWith(
      'New Title!'
    );
  });
});
