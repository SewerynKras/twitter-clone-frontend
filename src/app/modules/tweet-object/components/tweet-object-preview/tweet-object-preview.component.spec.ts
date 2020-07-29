import { UserProfileMockResponse } from './../../../../core/mocks/user.mock';
import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectPreviewComponent } from './tweet-object-preview.component';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('TweetObjectPreviewComponent', () => {
  let component: TweetObjectPreviewComponent;
  let fixture: ComponentFixture<TweetObjectPreviewComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectPreviewComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectPreviewComponent);
    component = fixture.componentInstance;
    httpMock = fixture.debugElement.injector.get(HttpTestingController);
    component.tweet = TweetResponseMock;

    fixture.detectChanges();
    var req = httpMock.expectOne(() => true); //match any
    req.flush(UserProfileMockResponse);

    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get authors profile', () => {
    component.getUserInfo().subscribe((response) => {
      expect(response).toEqual(UserProfileMockResponse);
    });

    const req = httpMock.expectOne(() => true); //match any
    req.flush(UserProfileMockResponse);
  });

  it('should get the nested tweet', () => {
    component.getNestedTweet('123').subscribe((response) => {
      expect(response).toEqual(TweetResponseMock);
    });

    const req = httpMock.expectOne(() => true); //match any
    req.flush(TweetResponseMock);
  });
});
