import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetPageFooterComponent } from './tweet-page-footer.component';

describe('TweetPageFooterComponent', () => {
  let component: TweetPageFooterComponent;
  let fixture: ComponentFixture<TweetPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
