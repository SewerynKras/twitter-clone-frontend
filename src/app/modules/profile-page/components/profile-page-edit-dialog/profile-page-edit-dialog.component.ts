import { UsersService } from './../../../../core/http/user/users.service';
import { UserProfilePATCHBody } from './../../../../shared/models/user.model';
import { ProfilePageEditFormImageComponent } from './../profile-page-edit-form-image/profile-page-edit-form-image.component';
import { ProfilePageEditFormComponent } from './../profile-page-edit-form/profile-page-edit-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-page-edit-dialog',
  templateUrl: './profile-page-edit-dialog.component.html',
  styleUrls: ['./profile-page-edit-dialog.component.scss'],
})
export class ProfilePageEditDialogComponent implements OnInit {
  @ViewChild(ProfilePageEditFormComponent) form: ProfilePageEditFormComponent;
  @ViewChild(ProfilePageEditFormImageComponent)
  image: ProfilePageEditFormImageComponent;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}

  getFormData(): UserProfilePATCHBody {
    throw 'not implemented';
  }

  getImage(): File | null {
    throw 'not implemented';
  }

  saveDialogData(): void {
    throw 'not implemented';
  }
}
