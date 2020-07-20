import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsRetweetComponent } from './tweet-object-actions-retweet.component';

describe('TweetObjectActionsRetweetComponent', () => {
  let component: TweetObjectActionsRetweetComponent;
  let fixture: ComponentFixture<TweetObjectActionsRetweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectActionsRetweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsRetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
