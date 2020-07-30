import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectStandardComponent } from './tweet-object-standard.component';

describe('TweetObjectStandardComponent', () => {
  let component: TweetObjectStandardComponent;
  let fixture: ComponentFixture<TweetObjectStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetObjectStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
