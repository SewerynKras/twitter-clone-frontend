import {
  TweetResponse,
  TweetPOSTBody,
} from './../../../../shared/models/tweet.model';
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
    this.creationComponent.getTweetBody = this.getOverrideMethod(baseMethod);
    // close the dialog after the retweet gets created successfully
    this.creationComponent.tweetCreated.subscribe((tweet) =>
      this.dialogRef.close(true)
    );
  }

  /**
   * Returns a method that should be used to override a method that
   * generates a TweetPOSTBody. This methods call the original one and
   * simply adds the 'retweet_id' to the generated body.
   */
  getOverrideMethod(
    baseMethod: (...any) => TweetPOSTBody
  ): (...any) => TweetPOSTBody {
    var retweet_id = this.retweet.id;
    return function () {
      var body = baseMethod.apply(this, arguments);
      body.retweet_id = retweet_id;
      return body;
    };
  }
}
