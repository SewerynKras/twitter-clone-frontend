import { of } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectActionsCommentButtonComponent } from './tweet-object-actions-comment-button.component';
import { TweetResponseMock } from 'src/app/core/mocks/tweet.mock';

describe('TweetObjectActionsCommentButtonComponent', () => {
  let component: TweetObjectActionsCommentButtonComponent;
  let fixture: ComponentFixture<TweetObjectActionsCommentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectActionsCommentButtonComponent],
      providers: [
        {
          provide: MatDialog,
          useValue: { open: () => {} },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectActionsCommentButtonComponent);
    component = fixture.componentInstance;
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

  it('should emit after a comment gets created', () => {
    component.commentCreated.subscribe((tweet) => {
      expect(tweet).toEqual({ ...TweetResponseMock });
    });
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: function () {
        return of({ ...TweetResponseMock });
      },
    } as MatDialogRef<any>);
    component.openDialog();
  });
});
