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
  const dummyUrl = 'someurl123';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InfiniteScrollComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.setupInitListValues(dummyList, dummyUrl);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setup the init data correctly', () => {
    expect(component.savedList).toEqual(ProfileListMockResponsePage1);
    expect(component.baseUrl).toEqual(dummyUrl);
  });

  it('should load the next page', () => {
    component.savedList = { ...ProfileListMockResponsePage1 };
    component.savedList.next = 5;
    spyOn(component['pagination'], 'getPage').and.returnValue(
      of({ ...ProfileListMockResponsePage2 })
    );
    component.loadNextPage().subscribe((page) => {
      expect(page).toEqual(ProfileListMockResponsePage2);
      expect(component.savedList).toEqual(ProfileListMockResponsePage2);
    });
  });
  it('should load the previous page', () => {
    component.savedList = { ...ProfileListMockResponsePage1 };
    component.savedList.previous = 3;
    spyOn(component['pagination'], 'getPage').and.returnValue(
      of({ ...ProfileListMockResponsePage2 })
    );
    component.loadPrevPage().subscribe((page) => {
      expect(page).toEqual(ProfileListMockResponsePage2);
      expect(component.savedList).toEqual(ProfileListMockResponsePage2);
    });
  });

  it('should throw if there is no next page', () => {
    component.savedList = { ...ProfileListMockResponsePage1 };
    component.savedList.next = null;
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
    component.savedList = { ...ProfileListMockResponsePage1 };
    component.savedList.previous = null;
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
