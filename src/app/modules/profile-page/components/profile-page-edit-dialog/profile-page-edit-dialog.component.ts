import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from './../../../../../environments/environment';
import { AuthService } from './../../../../core/auth/auth.service';
import { UsersService } from './../../../../core/http/user/users.service';
import {
  UserProfilePATCHBody,
  UserProfileResponse,
} from './../../../../shared/models/user.model';
import { ProfilePageEditFormImageComponent } from './../profile-page-edit-form-image/profile-page-edit-form-image.component';
import { ProfilePageEditFormComponent } from './../profile-page-edit-form/profile-page-edit-form.component';
import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-profile-page-edit-dialog',
  templateUrl: './profile-page-edit-dialog.component.html',
  styleUrls: ['./profile-page-edit-dialog.component.scss'],
})
export class ProfilePageEditDialogComponent implements OnInit, AfterViewInit {
  @ViewChild(ProfilePageEditFormComponent) form: ProfilePageEditFormComponent;
  @ViewChild(ProfilePageEditFormImageComponent)
  image: ProfilePageEditFormImageComponent;
  constructor(
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: UserProfileResponse
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupInitValues(this.data);
  }

  /**
   * Retrieves the form data from the form component.
   */
  getFormData(): UserProfilePATCHBody {
    var data = this.form.getValue();
    return data;
  }

  /**
   * Retrieves the image file from the image form control.
   */
  getImage(): File | null {
    var img = this.image.getValue();
    return img;
  }

  /**
   * Creates the PATCH body from the form and image controls and
   * calls the `updateMyProfile` method.
   * After successful update it reloads the page to reflect new changes.
   */
  saveDialogData(_window?): void {
    // _window is used during testing since it's impossible to mock the actual
    // window object. When it's not provided the actual window gets used instead.
    var _window = _window || window;

    var body = this.getFormData();
    var img = this.getImage();
    if (img) body.image = img;
    this.usersService
      .updateMyProfile({ body: body })
      .subscribe((newProfile) => {
        //  Navigate to the new user's profile page in case the username has changed
        _window.location.assign(
          `${environment.frontendURL}/profile/${newProfile.username}/`
        );
      });
  }

  /**
   * Sets up the initial values inside the form component and the image preview.
   * @param profile UserProfileResponse
   */
  setupInitValues(profile: UserProfileResponse): void {
    this.form.setupInitValues(profile);
    if (profile['image_url']) this.image.setupInitValues(profile['image_url']);
  }
}
