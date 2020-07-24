import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsCommentButtonComponent } from './tweet-object-actions-comment-button.component';

describe('TweetObjectActionsCommentButtonComponent', () => {
  let component: TweetObjectActionsCommentButtonComponent;
  let fixture: ComponentFixture<TweetObjectActionsCommentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectActionsCommentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsCommentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
