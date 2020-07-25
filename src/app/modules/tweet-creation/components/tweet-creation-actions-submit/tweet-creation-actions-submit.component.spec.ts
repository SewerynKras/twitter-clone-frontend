import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationActionsSubmitComponent } from './tweet-creation-actions-submit.component';

describe('TweetCreationActionsSubmitComponent', () => {
  let component: TweetCreationActionsSubmitComponent;
  let fixture: ComponentFixture<TweetCreationActionsSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationActionsSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationActionsSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
