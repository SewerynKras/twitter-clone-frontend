import { TweetObjectActionsRetweetButtonComponent } from './../../../tweet-object/components/tweet-object-actions-retweet-button/tweet-object-actions-retweet-button.component';
import { TweetObjectActionsCommentButtonComponent } from './../../../tweet-object/components/tweet-object-actions-comment-button/tweet-object-actions-comment-button.component';
import { TweetObjectActionsLikeButtonComponent } from './../../../tweet-object/components/tweet-object-actions-like-button/tweet-object-actions-like-button.component';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tweet-page-actions',
  templateUrl: './tweet-page-actions.component.html',
  styleUrls: ['./tweet-page-actions.component.scss'],
})
export class TweetPageActionsComponent implements OnInit {
  @Input() tweet: TweetResponse;

  @ViewChild(TweetObjectActionsLikeButtonComponent)
  likeButton: TweetObjectActionsLikeButtonComponent;
  @ViewChild(TweetObjectActionsCommentButtonComponent)
  commentButton: TweetObjectActionsCommentButtonComponent;
  @ViewChild(TweetObjectActionsRetweetButtonComponent)
  retweetButton: TweetObjectActionsRetweetButtonComponent;

  constructor() {}
  ngOnInit(): void {}
}
