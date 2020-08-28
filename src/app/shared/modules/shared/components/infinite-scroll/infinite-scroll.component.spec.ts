import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ProfileListMockResponsePage2 } from './../../../core/mocks/user.mock';
import { ListResponse } from 'src/app/shared/models/response.model';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollComponent } from './infinite-scroll.component';
import { ProfileListMockResponsePage1 } from 'src/app/core/mocks/user.mock';

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent<any>;
  let fixture: ComponentFixture<InfiniteScrollComponent<any>>;
  const dummyList = { ...ProfileListMockResponsePage1 };
  let dummyService = {
    dummyMethod: jasmine
      .createSpy()
      .and.resolveTo({ ...ProfileListMockResponsePage1 }),
  };
  let dummyArgs = { a: '1' };
  let dummyParams = { foo: 'bar' };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InfiniteScrollComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    spyOn(component['pagination'], 'getPage').and.returnValue(
      of({ ...ProfileListMockResponsePage2 })
    );
    fixture.detectChanges();

    component.setupInitPageValues(
      dummyService.dummyMethod,
      dummyArgs,
      dummyParams
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setup the init data correctly', () => {
    expect(component.serviceMethod).toEqual(dummyService.dummyMethod);
    expect(component.serviceMethodArgs).toEqual(dummyArgs);
  });

  it('should load the next page', () => {
    component.savedPage = { ...ProfileListMockResponsePage1 };
    component.savedPage.next = 5;

    component.loadNextPage().subscribe((page) => {
      expect(page).toEqual(ProfileListMockResponsePage2);
      expect(component.savedPage).toEqual(ProfileListMockResponsePage2);
    });
  });
  it('should load the previous page', () => {
    component.savedPage = { ...ProfileListMockResponsePage1 };
    component.savedPage.previous = 3;

    component.loadPrevPage().subscribe((page) => {
      expect(page).toEqual(ProfileListMockResponsePage2);
      expect(component.savedPage).toEqual(ProfileListMockResponsePage2);
    });
  });

  it('should throw if there is no next page', () => {
    component.savedPage = { ...ProfileListMockResponsePage1 };
    component.savedPage.next = null;
    component.loadNextPage().subscribe(
      (_) => {
        expect(1).toEqual(2);
      },
      (err) => {
        expect(err.message).toEqual('No page found!');
      }
    );
  });

  it('should throw if there is no prev page', () => {
    component.savedPage = { ...ProfileListMockResponsePage1 };
    component.savedPage.previous = null;
    component.loadPrevPage().subscribe(
      (_) => {
        expect(1).toEqual(2);
      },
      (err) => {
        expect(err.message).toEqual('No page found!');
      }
    );
  });
});
