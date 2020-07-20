import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsComponent } from './tweet-object-actions.component';

describe('TweetObjectActionsComponent', () => {
  let component: TweetObjectActionsComponent;
  let fixture: ComponentFixture<TweetObjectActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
