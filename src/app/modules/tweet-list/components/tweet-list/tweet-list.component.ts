import {
  httpRequestParams,
  httpRequestArgs,
} from './../../../../shared/models/http.model';
import { PaginationService } from './../../../../core/services/pagination.service';
import { ListResponse } from 'src/app/shared/models/response.model';
import { InfiniteScrollComponent } from './../../../../shared/components/infinite-scroll/infinite-scroll.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent implements OnInit, AfterViewInit {
  @Input() overrideServiceMethod: Function;
  @Input() overrideServiceMethodArgs: httpRequestArgs;
  @Input() overrideServiceMethodParams: httpRequestParams;
  @ViewChild(InfiniteScrollComponent, { static: true })
  scroll: InfiniteScrollComponent<TweetResponse>;

  tweets: TweetResponse[] = [];

  constructor(private tweetsService: TweetsService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let method =
      this.overrideServiceMethod ||
      this.tweetsService.getTweetsList.bind(this.tweetsService);
    let args = this.overrideServiceMethodArgs || {};
    let params = this.overrideServiceMethodParams || {};
    this.scroll.setupInitPageValues(method, args, params);
  }

  appendResults(results: TweetResponse[]): void {
    this.tweets.push(...results);
  }

  prependResults(results: TweetResponse[]): void {
    this.tweets.unshift(...results);
  }
}
