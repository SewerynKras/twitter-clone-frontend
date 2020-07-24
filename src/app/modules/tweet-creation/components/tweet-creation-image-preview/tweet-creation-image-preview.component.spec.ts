import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationImagePreviewComponent } from './tweet-creation-image-preview.component';

describe('TweetCreationImagePreviewComponent', () => {
  let component: TweetCreationImagePreviewComponent;
  let fixture: ComponentFixture<TweetCreationImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetCreationImagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
