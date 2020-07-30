import { RouterTestingModule } from '@angular/router/testing';
import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { UserProfileMockResponse } from './../../../../core/mocks/user.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectComponent } from './tweet-object.component';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('TweetObjectComponent', () => {
  let component: TweetObjectComponent;
  let fixture: ComponentFixture<TweetObjectComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TweetObjectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get(HttpTestingController);
    component.tweet = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should determine whether or not a tweet is a pure retweet', () => {
    component.tweet.retweet = '123';
    component.tweet.text = 'some text 123';
    component.ngOnInit();
    expect(component.isStandardTweet).toEqual(true);

    component.tweet.retweet = '';
    component.tweet.text = 'some text 123';
    component.ngOnInit();
    expect(component.isStandardTweet).toEqual(true);

    component.tweet.retweet = '123';
    component.tweet.text = '';
    component.ngOnInit();
    expect(component.isStandardTweet).toEqual(false);
  });
  it('should navigate to the tweets page', () => {
    component.tweet.id = '123';
    component.tweet.retweet = '456';
    component.tweet.text = 'some text';
    component.ngOnInit();

    spyOn(component['router'], 'navigate');
    component.navigateToTweetPage();
    expect(component['router'].navigate).toHaveBeenCalledWith(['tweets/123/']);
  });
  it('should navigate to the retweets page if the given tweet is a pure retweet', () => {
    component.tweet.id = '123';
    component.tweet.retweet = '456';
    component.tweet.text = '';
    component.ngOnInit();

    spyOn(component['router'], 'navigate');
    component.navigateToTweetPage();
    expect(component['router'].navigate).toHaveBeenCalledWith(['tweets/456/']);
  });
});
