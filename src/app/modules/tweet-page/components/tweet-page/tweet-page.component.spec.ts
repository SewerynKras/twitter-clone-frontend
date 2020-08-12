import { of } from 'rxjs';
import { UserProfileMockResponse } from './../../../../core/mocks/user.mock';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageComponent } from './tweet-page.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('TweetPageComponent', () => {
  let component: TweetPageComponent;
  let fixture: ComponentFixture<TweetPageComponent>;
  let httpMock: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TweetPageComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: {
            open: () => {},
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(),
            snapshot: {
              paramMap: {
                get(name: string) {
                  if (name == 'tweet_id') return TweetResponseMock.id;
                  else return null;
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageComponent);
    component = fixture.componentInstance;
    spyOn(component['title'], 'changeTitle');
    fixture.detectChanges();
    // Flush the tweet
    var req = httpMock.expectOne(() => true);
    req.flush(TweetResponseMock);
    fixture.detectChanges();
    // Flush the user info
    var req = httpMock.expectOne(() => true);
    req.flush(UserProfileMockResponse);
    fixture.detectChanges();
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the selected tweet', () => {
    component.tweet$.subscribe((tweet) =>
      expect(tweet).toEqual(TweetResponseMock)
    );
    const req = httpMock.expectOne(() => true);
    req.flush(TweetResponseMock);
  });

  it('should open the image dialog', () => {
    spyOn(component['dialog'], 'open');
    component.openDialog('');
    expect(component['dialog'].open).toHaveBeenCalled();
  });

  it('should handle new comments being added', () => {
    component.tweetList = jasmine.createSpyObj('tweetList', null, {
      tweets: [],
    });
    component.handleCommentCreated({ ...TweetResponseMock });
    expect(component.tweetList.tweets).toEqual([TweetResponseMock]);
  });

  it('should update the title', () => {
    expect(component['title'].changeTitle).toHaveBeenCalledWith('Tweet');
  });
});
