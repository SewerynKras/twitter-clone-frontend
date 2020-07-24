import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationTextareaComponent } from './tweet-creation-textarea.component';

describe('TweetCreationTextareaComponent', () => {
  let component: TweetCreationTextareaComponent;
  let fixture: ComponentFixture<TweetCreationTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
