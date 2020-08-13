import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideRecommendationsProfileComponent } from './right-side-recommendations-profile.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('RightSideRecommendationsProfileComponent', () => {
  let component: RightSideRecommendationsProfileComponent;
  let fixture: ComponentFixture<RightSideRecommendationsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideRecommendationsProfileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideRecommendationsProfileComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
