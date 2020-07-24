import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageCreatedInfoComponent } from './tweet-page-created-info.component';

describe('TweetPageCreatedInfoComponent', () => {
  let component: TweetPageCreatedInfoComponent;
  let fixture: ComponentFixture<TweetPageCreatedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetPageCreatedInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageCreatedInfoComponent);
    component = fixture.componentInstance;
    component.tweet = TweetResponseMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the date correctly', () => {
    component.tweet.created_date = new Date('1995-12-17T03:24:00');
    const result = component.getDateCreated();
    expect(result).toEqual('17 Dec 1995');
  });
  it('should calculate the time correctly', () => {
    component.tweet.created_date = new Date('1995-12-17T03:24:00');
    const result = component.getTimeCreated();
    expect(result).toEqual('3:24');
  });
});
