import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationAuthorPictureComponent } from './tweet-creation-author-picture.component';

describe('TweetCreationAuthorPictureComponent', () => {
  let component: TweetCreationAuthorPictureComponent;
  let fixture: ComponentFixture<TweetCreationAuthorPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationAuthorPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationAuthorPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
