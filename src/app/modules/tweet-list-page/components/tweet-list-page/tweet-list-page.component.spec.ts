import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListPageComponent } from './tweet-list-page.component';

describe('TweetListPageComponent', () => {
  let component: TweetListPageComponent;
  let fixture: ComponentFixture<TweetListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetListPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListPageComponent);
    component = fixture.componentInstance;
    spyOn(component['title'], 'changeTitle');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the title', () => {
    expect(component['title'].changeTitle).toHaveBeenCalledWith(
      'Latest Tweets'
    );
  });
});
