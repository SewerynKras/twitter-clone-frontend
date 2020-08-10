import { ResizeService } from './../../../../core/services/resize.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-page-header-profile-pic',
  templateUrl: './profile-page-header-profile-pic.component.html',
  styleUrls: ['./profile-page-header-profile-pic.component.scss'],
})
export class ProfilePageHeaderProfilePicComponent implements OnInit {
  @Input() user: UserProfileResponse;

  constructor(private resize: ResizeService) {}

  ngOnInit(): void {}

  /**
   * Returns the cloudinary url with transformation
   * parameters set to 140 height and 140 width
   * @param url string
   */
  getImageResized(): string {
    return this.resize.applyTransform(this.user.image_url, 140, 140);
  }
}
