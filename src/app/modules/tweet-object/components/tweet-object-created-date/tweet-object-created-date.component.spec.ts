import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectCreatedDateComponent } from './tweet-object-created-date.component';

describe('TweetObjectCreatedDateComponent', () => {
  let component: TweetObjectCreatedDateComponent;
  let fixture: ComponentFixture<TweetObjectCreatedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectCreatedDateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectCreatedDateComponent);
    component = fixture.componentInstance;
    component.tweet = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format the date to include seconds when the time elapsed is <1 minute', () => {
    let currDate = new Date();
    let date30sAgo = new Date(currDate.setSeconds(currDate.getSeconds() - 30));
    component.tweet.created_date = date30sAgo;
    const response = component.getFormattedDate();
    expect(response).toEqual('30s');
  });

  it('should format the date to include minutes when the time elapsed is <1 hour', () => {
    let currDate = new Date();
    let date30mAgo = new Date(currDate.setMinutes(currDate.getMinutes() - 30));
    component.tweet.created_date = date30mAgo;
    const response = component.getFormattedDate();
    expect(response).toEqual('30m');
  });

  it('should format the date to include hours when the time elapsed is <1 day', () => {
    let currDate = new Date();
    let date12hAgo = new Date(currDate.setHours(currDate.getHours() - 12));
    component.tweet.created_date = date12hAgo;
    const response = component.getFormattedDate();
    expect(response).toEqual('12h');
  });

  it('should format the date to include day + month when the time elapsed is >1 day', () => {
    let currDate = new Date();
    let date10dAgo = new Date(currDate.setDate(currDate.getDate() - 10));
    component.tweet.created_date = date10dAgo;
    const response = component.getFormattedDate();
    expect(response).toEqual(
      date10dAgo.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      })
    );
  });
});
