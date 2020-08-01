import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectHeaderComponent } from './tweet-object-header.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('TweetObjectHeaderComponent', () => {
  let component: TweetObjectHeaderComponent;
  let fixture: ComponentFixture<TweetObjectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectHeaderComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
