import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectRetweetAnnotationComponent } from './tweet-object-retweet-annotation.component';

describe('TweetObjectRetweetAnnotationComponent', () => {
  let component: TweetObjectRetweetAnnotationComponent;
  let fixture: ComponentFixture<TweetObjectRetweetAnnotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectRetweetAnnotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectRetweetAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
