import { ResizeService } from './../../../../../core/services/resize.service';
import { Router } from '@angular/router';
import {
  UserProfileResponse,
  BaseUserProfile,
} from './../../../../models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-picture',
  templateUrl: './user-picture.component.html',
  styleUrls: ['./user-picture.component.scss'],
})
export class UserPictureComponent implements OnInit {
  @Input() user: UserProfileResponse | BaseUserProfile;
  constructor(private resize: ResizeService, private router: Router) {}

  ngOnInit(): void {}

  /**
   * Returns the cloudinary url with transformation
   * parameters set to 50 height and 50 width
   * @param url string
   */
  getImageResized(url: string): string {
    return this.resize.applyTransform(url, 50, 50);
  }

  /**
   * Navigates to the user's profile page.
   */
  navigateToProfile(): void {
    this.router.navigate([`profile/${this.user.username}/`]);
  }

  /**
   * If the given url is empty this method return the path to the default profile pic.
   * Otherwise it calls the `getImageResized` method.
   * @param url string
   */
  getImageSrc(url: string): string {
    return url ? this.getImageResized(url) : 'assets/profilepic.png';
  }
}
