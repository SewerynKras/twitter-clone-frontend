import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { TweetResponseMock } from './../../../../core/mocks/tweet.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsRetweetButtonComponent } from './tweet-object-actions-retweet-button.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelect } from '@angular/material/select';

describe('TweetObjectActionsRetweetButtonComponent', () => {
  let component: TweetObjectActionsRetweetButtonComponent;
  let fixture: ComponentFixture<TweetObjectActionsRetweetButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsRetweetButtonComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MatDialog,
          useValue: { open: () => {} },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsRetweetButtonComponent);
    component = fixture.componentInstance;
    component.tweet = { ...TweetResponseMock };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the dialog', () => {
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: function () {
        return of('');
      },
    } as MatDialogRef<any>);
    component.openDialog();
    expect(component.dialog.open).toHaveBeenCalled();
  });

  it('should emit after a retweet gets created', () => {
    component.retweetCreated.subscribe((_) => {
      expect().nothing();
    });
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: function () {
        return of('');
      },
    } as MatDialogRef<any>);
    component.openDialog();
  });

  it('should create a retweet with no comment', () => {
    component.retweetOptions = {
      open: () => {},
      close: () => {},
    } as MatSelect;
    spyOn(component['tweetsService'], 'createTweet').and.returnValue(of());
    spyOn(component.retweetOptions, 'close');
    component.createRetweetWithNoComment();
    expect(component['tweetsService'].createTweet).toHaveBeenCalledWith({
      retweet_id: TweetResponseMock.id,
    });
  });

  it('should close the options menu after a retweet with no comment gets created', () => {
    component.retweetOptions = {
      open: () => {},
      close: () => {},
    } as MatSelect;
    spyOn(component['tweetsService'], 'createTweet').and.returnValue(of());
    spyOn(component.retweetOptions, 'close');
    component.createRetweetWithNoComment();
    expect(component.retweetOptions.close).toHaveBeenCalled();
  });
});
