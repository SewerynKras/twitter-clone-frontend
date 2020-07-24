import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationActionsEmojiComponent } from './tweet-creation-actions-emoji.component';

describe('TweetCreationActionsEmojiComponent', () => {
  let component: TweetCreationActionsEmojiComponent;
  let fixture: ComponentFixture<TweetCreationActionsEmojiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationActionsEmojiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationActionsEmojiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
