import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderButtonsComponent } from './profile-page-header-buttons.component';

describe('ProfilePageHeaderButtonsComponent', () => {
  let component: ProfilePageHeaderButtonsComponent;
  let fixture: ComponentFixture<ProfilePageHeaderButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageHeaderButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
