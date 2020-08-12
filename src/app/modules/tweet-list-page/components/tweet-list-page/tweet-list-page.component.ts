import { HeaderTitleService } from './../../../../shared/services/header-title.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-list-page',
  templateUrl: './tweet-list-page.component.html',
  styleUrls: ['./tweet-list-page.component.scss'],
})
export class TweetListPageComponent implements OnInit {
  constructor(private title: HeaderTitleService) {}

  ngOnInit(): void {
    this.title.changeTitle('Latest Tweets');
  }
}
