import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';
import { LikesService } from './../../../../core/http/like/likes.service';

@Component({
  selector: 'app-tweet-object-actions-like',
  templateUrl: './tweet-object-actions-like.component.html',
  styleUrls: ['./tweet-object-actions-like.component.scss'],
})
export class TweetObjectActionsLikeComponent implements OnInit {
  @Input() tweet: TweetResponse;
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

    // DELETE like
    if (this.tweet.is_liked) {
      this.tweet.likes -= 1;
      this.likeService.deleteLike(this.tweet.id).subscribe((_) => {
        this.controlDisabled = false;
      });
    }
    // CREATE like
    else {
      this.tweet.likes += 1;
      this.likeService.createLike(this.tweet.id).subscribe((_) => {
        this.controlDisabled = false;
      });
    }
  }
}
