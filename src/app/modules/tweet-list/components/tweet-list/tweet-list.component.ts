import { PaginationService } from './../../../../core/services/pagination.service';
import { ListResponse } from 'src/app/shared/models/response.model';
import { InfiniteScrollComponent } from './../../../../shared/components/infinite-scroll/infinite-scroll.component';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TweetsService } from './../../../../core/http/tweet/tweets.service';
import { TweetResponse } from './../../../../shared/models/tweet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.scss'],
})
export class TweetListComponent
  extends InfiniteScrollComponent<ListResponse<TweetResponse>>
  implements OnInit {
  tweets$: Observable<TweetResponse[]>;
  constructor(
    private tweetsService: TweetsService,
    pagination: PaginationService
  ) {
    super(pagination);
  }

  ngOnInit(): void {
    this.tweets$ = this.tweetsService
      .getTweetsList()
      .pipe(map((tweets) => tweets['results']));
  }
}
