import { ResizeService } from './../../../../core/services/resize.service';
import { UserProfileResponse } from './../../../../shared/models/user.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-author-picture',
  templateUrl: './tweet-object-author-picture.component.html',
  styleUrls: ['./tweet-object-author-picture.component.scss'],
})
export class TweetObjectAuthorPictureComponent implements OnInit {
  @Input() user: UserProfileResponse;
  constructor(private resize: ResizeService) {}

  ngOnInit(): void {}

  /**
   * Returns the cloudinary url with transformation
   * parameters set to 40 height and 40 width
   * @param url string
   */
  getImageResized(url: string): string {
    return this.resize.applyTransform(url, 50, 50);
  }
}
