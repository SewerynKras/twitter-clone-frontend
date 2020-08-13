import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideRecommendationsComponent } from './right-side-recommendations.component';

describe('RightSideRecommendationsComponent', () => {
  let component: RightSideRecommendationsComponent;
  let fixture: ComponentFixture<RightSideRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
