import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageEditFormComponent } from './profile-page-edit-form.component';

describe('ProfilePageEditFormComponent', () => {
  let component: ProfilePageEditFormComponent;
  let fixture: ComponentFixture<ProfilePageEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
