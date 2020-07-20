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
      imports: [HttpClientTestingModule],
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

  it('should resize the image url', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload/w_40,h_40/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = component.getImageResized(img_url);
    expect(result).toEqual(expected);
  });
});
