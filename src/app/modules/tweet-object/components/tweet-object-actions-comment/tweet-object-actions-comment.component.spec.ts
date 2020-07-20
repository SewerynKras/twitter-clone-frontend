import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsCommentComponent } from './tweet-object-actions-comment.component';

describe('TweetObjectActionsCommentComponent', () => {
  let component: TweetObjectActionsCommentComponent;
  let fixture: ComponentFixture<TweetObjectActionsCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectActionsCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
