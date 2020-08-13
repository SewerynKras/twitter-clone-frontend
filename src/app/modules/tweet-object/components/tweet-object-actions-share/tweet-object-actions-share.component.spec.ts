import { environment } from './../../../../../environments/environment';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsShareComponent } from './tweet-object-actions-share.component';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';

describe('TweetObjectActionsShareComponent', () => {
  let component: TweetObjectActionsShareComponent;
  let fixture: ComponentFixture<TweetObjectActionsShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsShareComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsShareComponent);
    component = fixture.componentInstance;
    component['tweet'] = { ...TweetResponseMock };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should copy the link', () => {
    spyOn(component['clipboard'], 'copy');
    component.copyLinkToTweet();
    expect(component['clipboard'].copy).toHaveBeenCalledWith(
      `${environment.frontendURL}/tweet/${TweetResponseMock.id}/`
    );
  });
});
