import { TweetCreationRetweetDialogComponent } from './../../../tweet-creation/components/tweet-creation-retweet-dialog/tweet-creation-retweet-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tweet-object-actions-retweet-button',
  templateUrl: './tweet-object-actions-retweet-button.component.html',
  styleUrls: ['./tweet-object-actions-retweet-button.component.scss'],
})
export class TweetObjectActionsRetweetButtonComponent implements OnInit {
  @Input() tweet: TweetResponse;
  @Output() retweetCreated = new EventEmitter<void>();
  controlDisabled = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(TweetCreationRetweetDialogComponent, {
      data: this.tweet,
    });

    dialogRef.afterClosed().subscribe((created: boolean) => {
      if (created) {
        this.retweetCreated.emit();
        this.tweet.is_retweeted = true;
      }
    });
  }
}
