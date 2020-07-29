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
  @Output() commentCreated = new EventEmitter<void>();
  controlDisabled = false;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TweetCreationCommentDialogComponent, {
      data: this.tweet,
    });
  }

  ngOnInit(): void {}

  // TODO: CREATE COMMENT METHOD ONCE TWEET CREATION IS DONE
}
