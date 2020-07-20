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
}
