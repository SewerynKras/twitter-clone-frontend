import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageActionsComponent } from './tweet-page-actions.component';

describe('TweetPageActionsComponent', () => {
  let component: TweetPageActionsComponent;
  let fixture: ComponentFixture<TweetPageActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPageActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
