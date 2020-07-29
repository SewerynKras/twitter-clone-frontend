import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationRetweetDialogComponent } from './tweet-creation-retweet-dialog.component';

describe('TweetCreationRetweetDialogComponent', () => {
  let component: TweetCreationRetweetDialogComponent;
  let fixture: ComponentFixture<TweetCreationRetweetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationRetweetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationRetweetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
