import { MatDialog } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderButtonsEditComponent } from './profile-page-header-buttons-edit.component';
import { DatePipe } from '@angular/common';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
