import { of } from 'rxjs';
import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsLikeButtonComponent } from './tweet-object-actions-like-button.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('TweetObjectActionsLikeButtonComponent', () => {
  let component: TweetObjectActionsLikeButtonComponent;
  let fixture: ComponentFixture<TweetObjectActionsLikeButtonComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TweetObjectActionsLikeButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsLikeButtonComponent);
    component = fixture.componentInstance;
    component.tweet = TweetResponseMock;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should like the tweet', () => {
    component.tweet.is_liked = false;
    spyOn(component['likeService'], 'createLike').and.returnValue(of());
    component.toggleLike();
    expect(component['likeService'].createLike).toHaveBeenCalled();
  });

  it('should un-like the tweet', () => {
    component.tweet.is_liked = true;
    spyOn(component['likeService'], 'deleteLike').and.returnValue(of());
    component.toggleLike();
    expect(component['likeService'].deleteLike).toHaveBeenCalled();
  });
});
