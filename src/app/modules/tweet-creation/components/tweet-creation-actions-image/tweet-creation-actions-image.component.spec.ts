import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationActionsImageComponent } from './tweet-creation-actions-image.component';

describe('TweetCreationActionsImageComponent', () => {
  let component: TweetCreationActionsImageComponent;
  let fixture: ComponentFixture<TweetCreationActionsImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationActionsImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationActionsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
