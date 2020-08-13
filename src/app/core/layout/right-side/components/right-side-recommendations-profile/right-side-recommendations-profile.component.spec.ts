import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideRecommendationsProfileComponent } from './right-side-recommendations-profile.component';

describe('RightSideRecommendationsProfileComponent', () => {
  let component: RightSideRecommendationsProfileComponent;
  let fixture: ComponentFixture<RightSideRecommendationsProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideRecommendationsProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideRecommendationsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
