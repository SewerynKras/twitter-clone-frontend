import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderButtonsFollowComponent } from './profile-page-header-buttons-follow.component';

describe('ProfilePageHeaderButtonsFollowComponent', () => {
  let component: ProfilePageHeaderButtonsFollowComponent;
  let fixture: ComponentFixture<ProfilePageHeaderButtonsFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageHeaderButtonsFollowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderButtonsFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
