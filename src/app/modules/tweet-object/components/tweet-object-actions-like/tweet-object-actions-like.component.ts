import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-like',
  templateUrl: './tweet-object-actions-like.component.html',
  styleUrls: ['./tweet-object-actions-like.component.scss'],
})
export class TweetObjectActionsLikeComponent implements OnInit {
  @Input() tweet: TweetResponse;

  constructor() {}

  ngOnInit(): void {}

  /**
   * Increases or decreases the likes amount counter based on the given
   * argument (true => increase, false => decrease)
   * @param created boolean
   */
  changeCounter(created: boolean) {
    if (created) this.tweet.likes += 1;
    else this.tweet.likes -= 1;
  }
}
