import {
  UserProfilePATCHBody,
  UserProfileResponse,
} from './../../../../shared/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-edit-form',
  templateUrl: './profile-page-edit-form.component.html',
  styleUrls: ['./profile-page-edit-form.component.scss'],
})
export class ProfilePageEditFormComponent implements OnInit {
  editForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.editForm = new FormGroup({
      username: new FormControl(),
      display_name: new FormControl(),
      bio: new FormControl(),
      location: new FormControl(),
      website: new FormControl(),
      birth_date: new FormControl(),
    });
  }

  /**
   * Retrieves the PATCH body from the form.
   */
  getValue(): UserProfilePATCHBody {
    var raw = this.editForm.getRawValue();
    var body: UserProfilePATCHBody = {};
    for (const key in raw) {
      const element = raw[key];
      if (element) body[key] = element;
    }
    if (raw['birth_date']) {
      body['birth_date'] = new Date(raw['birth_date']);
    }
    return body;
  }

  /**
   * Sets up the initial values based on the given profile.
   * @param profile UserProfileResponse
   */
  setupInitValues(profile: UserProfileResponse): void {
    this.editForm.controls['username'].setValue(profile.username);
    this.editForm.controls['bio'].setValue(profile.bio);
    this.editForm.controls['display_name'].setValue(profile.display_name);
    this.editForm.controls['website'].setValue(profile.website);
    this.editForm.controls['birth_date'].setValue(profile.birth_date);
    this.editForm.controls['location'].setValue(profile.location);
  }
}
