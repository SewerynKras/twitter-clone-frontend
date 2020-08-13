import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideRecommendationsComponent } from './right-side-recommendations.component';
import {
  ProfileListMockResponsePage1,
  UserProfileMockResponse,
} from 'src/app/core/mocks/user.mock';

describe('RightSideRecommendationsComponent', () => {
  let component: RightSideRecommendationsComponent;
  let fixture: ComponentFixture<RightSideRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [RightSideRecommendationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setup the profiles list', () => {
    var dummyList = { ...ProfileListMockResponsePage1 };
    dummyList['results'] = [
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
    ];
    spyOn(
      component['followsService'],
      'getFollowRecommendations'
    ).and.returnValue(of(dummyList));
    component.ngOnInit();
    expect(component.profiles.length).toEqual(3);
    expect(component.profiles).toEqual([
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
      { ...UserProfileMockResponse },
    ]);
  });
});
