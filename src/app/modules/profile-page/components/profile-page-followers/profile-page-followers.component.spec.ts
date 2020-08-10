import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageFollowersComponent } from './profile-page-followers.component';

describe('ProfilePageFollowersComponent', () => {
  let component: ProfilePageFollowersComponent;
  let fixture: ComponentFixture<ProfilePageFollowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageFollowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
