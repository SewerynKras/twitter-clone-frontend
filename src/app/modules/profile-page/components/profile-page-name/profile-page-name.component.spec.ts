import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageNameComponent } from './profile-page-name.component';

describe('ProfilePageNameComponent', () => {
  let component: ProfilePageNameComponent;
  let fixture: ComponentFixture<ProfilePageNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
