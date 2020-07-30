import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-object-retweet-annotation',
  templateUrl: './tweet-object-retweet-annotation.component.html',
  styleUrls: ['./tweet-object-retweet-annotation.component.scss'],
})
export class TweetObjectRetweetAnnotationComponent implements OnInit {
  @Input() username: string;
  constructor() {}

  ngOnInit(): void {}

  /**
   * Redirects to the user's profile
   */
  navigateToProfile() {
    // TODO: add navigation when user's profile page is done
  }
}
