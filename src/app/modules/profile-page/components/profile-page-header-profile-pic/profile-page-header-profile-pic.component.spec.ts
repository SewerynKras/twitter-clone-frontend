import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderProfilePicComponent } from './profile-page-header-profile-pic.component';

describe('ProfilePageHeaderProfilePicComponent', () => {
  let component: ProfilePageHeaderProfilePicComponent;
  let fixture: ComponentFixture<ProfilePageHeaderProfilePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageHeaderProfilePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
