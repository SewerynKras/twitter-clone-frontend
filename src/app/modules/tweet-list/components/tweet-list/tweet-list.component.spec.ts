import { InfiniteScrollComponent } from './../../../../shared/components/infinite-scroll/infinite-scroll.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListComponent } from './tweet-list.component';
import { TweetResponse } from 'src/app/shared/models/tweet.model';

describe('TweetListComponent', () => {
  let component: TweetListComponent;
  let fixture: ComponentFixture<TweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetListComponent, InfiniteScrollComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListComponent);
    component = fixture.componentInstance;
    spyOn(component['scroll'], 'setupInitPageValues');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
