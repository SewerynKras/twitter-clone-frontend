import { TweetPageActionsComponent } from './../tweet-page-actions/tweet-page-actions.component';
import { TweetPageStatusComponent } from './../tweet-page-status/tweet-page-status.component';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-tweet-page-footer',
  templateUrl: './tweet-page-footer.component.html',
  styleUrls: ['./tweet-page-footer.component.scss'],
})
export class TweetPageFooterComponent implements OnInit, AfterViewInit {
  @Input() tweet: TweetResponse;
  @ViewChild(TweetPageActionsComponent)
  actionsController: TweetPageActionsComponent;
  @ViewChild(TweetPageStatusComponent)
  statusIndicator: TweetPageStatusComponent;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Wire the like button and like count indicator together
    this.actionsController.likeButton.tweetLiked.subscribe(
      (created: boolean) => {
        this.statusIndicator.changeLikesCounter(created);
      }
    );

    // Wire the comment button and comments and retweets count indicator together
    this.actionsController.commentButton.commentCreated.subscribe(() => {
      this.statusIndicator.increaseCommentsAndRetweetsCounter();
    });

    // Wire the retweet button and comments and retweets count indicator together
    this.actionsController.retweetButton.retweetCreated.subscribe(() => {
      this.statusIndicator.increaseCommentsAndRetweetsCounter();
    });
  }
}
