import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageStatusComponent } from './tweet-page-status.component';

describe('TweetPageStatusComponent', () => {
  let component: TweetPageStatusComponent;
  let fixture: ComponentFixture<TweetPageStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPageStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
