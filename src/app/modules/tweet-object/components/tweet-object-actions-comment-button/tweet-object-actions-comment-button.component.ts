import { TweetCreationCommentDialogComponent } from './../../../tweet-creation/components/tweet-creation-comment-dialog/tweet-creation-comment-dialog.component';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tweet-object-actions-comment-button',
  templateUrl: './tweet-object-actions-comment-button.component.html',
  styleUrls: ['./tweet-object-actions-comment-button.component.scss'],
})
export class TweetObjectActionsCommentButtonComponent implements OnInit {
  @Input() tweet: TweetResponse;
  @Output() commentCreated = new EventEmitter<TweetResponse>();
  controlDisabled = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(TweetCreationCommentDialogComponent, {
      data: this.tweet,
    });

    dialogRef.afterClosed().subscribe((tweet: TweetResponse) => {
      if (tweet) this.commentCreated.emit(tweet);
    });
  }

  ngOnInit(): void {}
}
