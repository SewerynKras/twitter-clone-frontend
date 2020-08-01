import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectPureRetweetComponent } from './tweet-object-pure-retweet.component';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';

describe('TweetObjectPureRetweetComponent', () => {
  let component: TweetObjectPureRetweetComponent;
  let fixture: ComponentFixture<TweetObjectPureRetweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TweetObjectPureRetweetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectPureRetweetComponent);
    component = fixture.componentInstance;
    component.tweet = { ...TweetResponseMock };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
