import {
  TweetResponseListMockPage1,
  TweetResponseListMockPage2,
} from './../../../../core/mocks/tweet.mock';
import { InfiniteScrollComponent } from './../../../../shared/modules/shared/components/infinite-scroll/infinite-scroll.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListComponent } from './tweet-list.component';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetListComponent, InfiniteScrollComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
    spyOn(component['scroll'], 'setupInitPageValues');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should append results', () => {
    component.tweets = { ...TweetResponseListMockPage2 }['results'].slice();
    var newTweets = { ...TweetResponseListMockPage1 }['results'].slice();
    component.appendResults(newTweets);
    expect(component.tweets).toEqual(
      Array.prototype.concat(
        { ...TweetResponseListMockPage2 }['results'].slice(),
        { ...TweetResponseListMockPage1 }['results'].slice()
      )
    );
  });
  it('should prepend results', () => {
    component.tweets = { ...TweetResponseListMockPage2 }['results'].slice();
    var newTweets = { ...TweetResponseListMockPage1 }['results'].slice();
    component.prependResults(newTweets);
    expect(component.tweets).toEqual(
      Array.prototype.concat(
        { ...TweetResponseListMockPage1 }['results'].slice(),
        { ...TweetResponseListMockPage2 }['results'].slice()
      )
    );
  });
});
