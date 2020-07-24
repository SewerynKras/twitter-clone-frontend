import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageCreatedInfoComponent } from './tweet-page-created-info.component';

describe('TweetPageCreatedInfoComponent', () => {
  let component: TweetPageCreatedInfoComponent;
  let fixture: ComponentFixture<TweetPageCreatedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPageCreatedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageCreatedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
