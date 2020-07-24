import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationActionsComponent } from './tweet-creation-actions.component';

describe('TweetCreationActionsComponent', () => {
  let component: TweetCreationActionsComponent;
  let fixture: ComponentFixture<TweetCreationActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
