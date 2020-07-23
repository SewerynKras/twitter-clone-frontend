import { ActivatedRoute } from '@angular/router';
import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageComponent } from './tweet-page.component';
import { of } from 'rxjs';
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
          provide: ActivatedRoute,
          useValue: {
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
    fixture.detectChanges();
    const req = httpMock.expectOne(() => true);
    req.flush(TweetResponseMock);
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
});
