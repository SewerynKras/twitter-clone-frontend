import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectComponent } from './tweet-object.component';

describe('TweetObjectComponent', () => {
  let component: TweetObjectComponent;
  let fixture: ComponentFixture<TweetObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
