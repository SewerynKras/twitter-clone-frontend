import { TweetResponse } from './../../../../shared/models/tweet.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TweetCreationComponent } from './../tweet-creation/tweet-creation.component';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

@Component({
  selector: 'app-tweet-creation-retweet-dialog',
  templateUrl: './tweet-creation-retweet-dialog.component.html',
  styleUrls: ['./tweet-creation-retweet-dialog.component.scss'],
})
export class TweetCreationRetweetDialogComponent implements OnInit {
  @ViewChild(TweetCreationComponent) creationComponent: TweetCreationComponent;
  constructor(
    public dialogRef: MatDialogRef<TweetCreationRetweetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public retweet: TweetResponse
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Override the `getTweetBody` method to include a retweet_id
    var baseMethod = this.creationComponent.getTweetBody;
    var retweet_id = this.retweet.id;
    this.creationComponent.getTweetBody = function () {
      var body = baseMethod.apply(this, arguments);
      body.retweet_id = retweet_id;
      return body;
    };

    // close the dialog after the retweet gets created successfully
    this.creationComponent.tweetCreated.subscribe((tweet) =>
      this.dialogRef.close(true)
    );
  }
}
