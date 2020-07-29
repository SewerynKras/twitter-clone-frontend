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
});
