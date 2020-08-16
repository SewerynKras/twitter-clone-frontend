import { ProfilePageEditDialogComponent } from './../profile-page-edit-dialog/profile-page-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderButtonsEditComponent } from './profile-page-header-buttons-edit.component';
import { DatePipe } from '@angular/common';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageHeaderButtonsEditComponent', () => {
  let component: ProfilePageHeaderButtonsEditComponent;
  let fixture: ComponentFixture<ProfilePageHeaderButtonsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageHeaderButtonsEditComponent],
      providers: [
        DatePipe,
        {
          provide: MatDialog,
          useValue: { open: () => {} },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderButtonsEditComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog', () => {
    spyOn(component['dialog'], 'open');
    component.openDialog();
    expect(component['dialog'].open).toHaveBeenCalledWith(
      ProfilePageEditDialogComponent,
      {
        width: '600px',
        height: '650px',
        data: { ...UserProfileMockResponse },
      }
    );
  });
});
