import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsShareComponent } from './tweet-object-actions-share.component';

describe('TweetObjectActionsShareComponent', () => {
  let component: TweetObjectActionsShareComponent;
  let fixture: ComponentFixture<TweetObjectActionsShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsShareComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
