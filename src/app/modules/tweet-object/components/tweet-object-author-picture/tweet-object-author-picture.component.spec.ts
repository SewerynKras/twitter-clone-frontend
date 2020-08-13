import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectAuthorPictureComponent } from './tweet-object-author-picture.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('TweetObjectAuthorPictureComponent', () => {
  let component: TweetObjectAuthorPictureComponent;
  let fixture: ComponentFixture<TweetObjectAuthorPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [TweetObjectAuthorPictureComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetObjectAuthorPictureComponent);
    component = fixture.componentInstance;
    component.user = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resize the image url', () => {
    const img_url =
      'https://res.cloudinary.com/deuw42oar/image/upload/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const expected =
      'https://res.cloudinary.com/deuw42oar/image/upload/w_50,h_50/v1593698711/kc1z0xcxph5ne4muvopq.jpg';
    const result = component.getImageResized(img_url);
    expect(result).toEqual(expected);
  });

  it('should navigate to the users profile', () => {
    spyOn(component['router'], 'navigate');
    component.navigateToProfile();
    expect(component['router'].navigate).toHaveBeenCalledWith([
      `profile/${UserProfileMockResponse.username}/`,
    ]);
  });

  it('should get the default profile pic if the url attribute is empty', () => {
    const result = component.getImageSrc('');
    expect(result).toEqual('assets/profilepic.png');
  });

  it('should get the resized image if the url attribute is present', () => {
    spyOn(component['resize'], 'applyTransform');
    const result = component.getImageSrc('test.test');
    expect(component['resize'].applyTransform).toHaveBeenCalled();
  });
});
