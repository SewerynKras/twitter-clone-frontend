import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectImageComponent } from './tweet-object-image.component';

describe('TweetObjectImageComponent', () => {
  let component: TweetObjectImageComponent;
  let fixture: ComponentFixture<TweetObjectImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectImageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when the image is clicked', () => {
    component.imageClicked.subscribe((_) => {
      expect().nothing();
    });
    component.emitImageClicked();
  });

  it('should preview the image', () => {
    var img = new File(['test'], '123');
    component.previewImage(img);
  });
});
