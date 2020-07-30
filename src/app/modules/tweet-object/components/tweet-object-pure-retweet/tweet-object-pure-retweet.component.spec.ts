import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectPureRetweetComponent } from './tweet-object-pure-retweet.component';

describe('TweetObjectPureRetweetComponent', () => {
  let component: TweetObjectPureRetweetComponent;
  let fixture: ComponentFixture<TweetObjectPureRetweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectPureRetweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectPureRetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
