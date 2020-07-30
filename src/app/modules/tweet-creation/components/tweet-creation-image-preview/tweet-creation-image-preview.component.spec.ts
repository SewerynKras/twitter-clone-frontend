import { TweetObjectImageComponent } from './../../../tweet-object/components/tweet-object-image/tweet-object-image.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCreationImagePreviewComponent } from './tweet-creation-image-preview.component';

describe('TweetCreationImagePreviewComponent', () => {
  let component: TweetCreationImagePreviewComponent;
  let fixture: ComponentFixture<TweetCreationImagePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetCreationImagePreviewComponent],
      providers: [TweetObjectImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCreationImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear the control', () => {
    component.imageComponent.imageAsUrl = 'www.url.com';
    component.clearControl();
    expect(component.imageComponent.imageAsUrl).toEqual('');
  });
});
