import { PaginationService } from './../../../../core/services/pagination.service';
import { ListResponse } from 'src/app/shared/models/response.model';
import { InfiniteScrollComponent } from './../../../../shared/components/infinite-scroll/infinite-scroll.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent implements OnInit, AfterViewInit {
  @ViewChild(InfiniteScrollComponent, { static: true })
  scroll: InfiniteScrollComponent<TweetResponse>;

  tweets: TweetResponse[] = [];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Setup the initial list
    this.tweetsService.getTweetsList().subscribe((tweets) => {
      this.scroll.setupInitListValues(tweets, this.tweetsService.baseUrl);
    });
  }

  appendResults(results: TweetResponse[]): void {
    this.tweets.push(...results);
  }
}
