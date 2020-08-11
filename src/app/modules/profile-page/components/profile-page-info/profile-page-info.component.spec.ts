import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageInfoComponent } from './profile-page-info.component';

describe('ProfilePageInfoComponent', () => {
  let component: ProfilePageInfoComponent;
  let fixture: ComponentFixture<ProfilePageInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
