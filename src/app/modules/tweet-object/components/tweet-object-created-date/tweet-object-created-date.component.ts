import { map } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-created-date',
  templateUrl: './tweet-object-created-date.component.html',
  styleUrls: ['./tweet-object-created-date.component.scss'],
})
export class TweetObjectCreatedDateComponent implements OnInit {
  @Input() tweet: TweetResponse;

  getFormattedDate$: Observable<string>;
  constructor() {}

  ngOnInit(): void {
    // Emits a new value every 3 seconds
    this.getFormattedDate$ = timer(0, 3000).pipe(
      map((_) => {
        return this.getFormattedDate();
      })
    );
  }

  /**
   * Formats the given tweets created_date to a string containing information
   * about time elapsed since the tweets creation.
   */
  getFormattedDate(): string {
    let currDate = new Date().getTime() / 1000; // current date in seconds
    let tweetDate = this.tweet.created_date.getTime() / 1000; // tweets creation date in seconds
    let timeDelta = currDate - tweetDate;
    // less than 60 seconds
    if (timeDelta < 60) return `${Math.floor(timeDelta)}s`;
    // less than 60 minutes
    else if (timeDelta < 60 * 60) return `${Math.floor(timeDelta / 60)}m`;
    // less than 24 hours
    else if (timeDelta < 60 * 60 * 24)
      return `${Math.floor(timeDelta / (60 * 60))}h`;
    // return the day + month
    else
      return this.tweet.created_date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      });
  }
}
