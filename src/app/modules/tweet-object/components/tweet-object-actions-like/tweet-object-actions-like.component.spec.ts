import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsLikeComponent } from './tweet-object-actions-like.component';

describe('TweetObjectActionsLikeComponent', () => {
  let component: TweetObjectActionsLikeComponent;
  let fixture: ComponentFixture<TweetObjectActionsLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsLikeComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
