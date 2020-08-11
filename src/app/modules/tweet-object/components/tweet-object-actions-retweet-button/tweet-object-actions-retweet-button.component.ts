import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { TweetCreationRetweetDialogComponent } from './../../../tweet-creation/components/tweet-creation-retweet-dialog/tweet-creation-retweet-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
  TweetResponse,
  TweetPOSTBody,
} from './../../../../shared/models/tweet.model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-tweet-object-actions-retweet-button',
  templateUrl: './tweet-object-actions-retweet-button.component.html',
  styleUrls: ['./tweet-object-actions-retweet-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TweetObjectActionsRetweetButtonComponent implements OnInit {
  @Input() tweet: TweetResponse;
  @Output() retweetCreated = new EventEmitter<void>();
  @ViewChild('retweetOptions') retweetOptions: MatSelect;
  controlDisabled = false;

  constructor(public dialog: MatDialog, private tweetsService: TweetsService) {}

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

  openRetweetOptions(): void {
    this.retweetOptions.open();
  }

  createRetweetWithNoComment(): void {
    // Close the options list even before the retweet gets created
    // so the user doesn't accidentally create more than one.
    this.retweetOptions.close();

    this.tweet.is_retweeted = true;
    this.retweetCreated.emit();

    let tweetBody: TweetPOSTBody = {
      retweet_id: this.tweet.id,
    };
    this.tweetsService.createTweet({ data: tweetBody }).subscribe();
  }
}
