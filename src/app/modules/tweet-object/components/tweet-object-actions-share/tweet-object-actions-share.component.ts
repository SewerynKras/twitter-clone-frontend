import { environment } from './../../../../../environments/environment';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-tweet-object-actions-share',
  templateUrl: './tweet-object-actions-share.component.html',
  styleUrls: ['./tweet-object-actions-share.component.scss'],
})
export class TweetObjectActionsShareComponent implements OnInit {
  @Input() tweet: TweetResponse;
  controlDisabled = false;

  frontendURL = environment.frontendURL;

  constructor(private clipboard: ClipboardService) {}

  ngOnInit(): void {}

  /**
   * Copies the link to the selected tweet to the clipboard.
   */
  copyLinkToTweet(): void {
    this.clipboard.copy(`${this.frontendURL}/tweet/${this.tweet.id}/`);
  }
}
