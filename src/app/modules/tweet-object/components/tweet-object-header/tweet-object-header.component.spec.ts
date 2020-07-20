import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectHeaderComponent } from './tweet-object-header.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resize the image url', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload/w_40,h_40/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = component.getImageResized(img_url);
    expect(result).toEqual(expected);
  });
});
