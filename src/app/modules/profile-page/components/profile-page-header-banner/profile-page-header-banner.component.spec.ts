import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderBannerComponent } from './profile-page-header-banner.component';

describe('ProfilePageHeaderBannerComponent', () => {
  let component: ProfilePageHeaderBannerComponent;
  let fixture: ComponentFixture<ProfilePageHeaderBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageHeaderBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
