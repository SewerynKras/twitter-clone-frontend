import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageEditDialogComponent } from './profile-page-edit-dialog.component';

describe('ProfilePageEditDialogComponent', () => {
  let component: ProfilePageEditDialogComponent;
  let fixture: ComponentFixture<ProfilePageEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePageEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
