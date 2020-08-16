import { UserProfileResponse } from './../../../../shared/models/user.model';
import { ProfilePageEditDialogComponent } from './../profile-page-edit-dialog/profile-page-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-header-buttons-edit',
  templateUrl: './profile-page-header-buttons-edit.component.html',
  styleUrls: ['./profile-page-header-buttons-edit.component.scss'],
})
export class ProfilePageHeaderButtonsEditComponent implements OnInit {
  @Input() user: UserProfileResponse;

  controlDisabled = false;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfilePageEditDialogComponent, {
      width: '600px',
      height: '650px',
      data: this.user,
    });
    dialogRef.afterClosed().subscribe((_) => {
      console.log('The dialog was closed!');
    });
  }
}
