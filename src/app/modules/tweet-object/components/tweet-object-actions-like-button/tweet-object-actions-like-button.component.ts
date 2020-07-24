import { LikesService } from './../../../../core/http/like/likes.service';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-like-button',
  templateUrl: './tweet-object-actions-like-button.component.html',
  styleUrls: ['./tweet-object-actions-like-button.component.scss'],
})
export class TweetObjectActionsLikeButtonComponent implements OnInit {
  @Input() tweet: TweetResponse;
  @Output() tweetLiked = new EventEmitter<boolean>();
  controlDisabled = false;

  constructor(private likeService: LikesService) {}

  ngOnInit(): void {}

  /**
   * Created/deletes a like from the given tweet.
   * Changes the likes amount next to the button by 1.
   * The like button becomes disabled while the backend processes the request.
   */
  toggleLike(): void {
    this.controlDisabled = true;
    // Flip the buttons state even before the actual request gets sent
    // to give the user visual feedback that the action has been acknowledged
    this.tweet.is_liked = !this.tweet.is_liked;

    // DELETE like (tweet.is_liked status is already changed here!)
    if (!this.tweet.is_liked) {
      this.tweetLiked.emit(false);
      this.likeService.deleteLike(this.tweet.id).subscribe((_) => {
        this.controlDisabled = false;
      });
    }
    // CREATE like (tweet.is_liked status is already changed here!)
    else {
      this.tweetLiked.emit(true);
      this.likeService.createLike(this.tweet.id).subscribe((_) => {
        this.controlDisabled = false;
      });
    }
  }
}
