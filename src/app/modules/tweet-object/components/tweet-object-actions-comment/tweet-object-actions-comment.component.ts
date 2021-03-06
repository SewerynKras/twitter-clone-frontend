import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-comment',
  templateUrl: './tweet-object-actions-comment.component.html',
  styleUrls: ['./tweet-object-actions-comment.component.scss'],
})
export class TweetObjectActionsCommentComponent implements OnInit {
  @Input() tweet: TweetResponse;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Increases the comments attribute of the given tweet by 1.
   * This should be called after a new comment gets created.
   */
  increaseCommentsCounter(): void {
    this.tweet.comments += 1;
  }
}
