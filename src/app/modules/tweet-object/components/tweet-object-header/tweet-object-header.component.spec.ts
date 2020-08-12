import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetObjectHeaderComponent } from './tweet-object-header.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('TweetObjectHeaderComponent', () => {
  let component: TweetObjectHeaderComponent;
  let fixture: ComponentFixture<TweetObjectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TweetObjectHeaderComponent],
      imports: [RouterTestingModule],
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

  it('should navigate to the users profile', () => {
    spyOn(component['router'], 'navigate');
    component.navigateToProfile();
    expect(component['router'].navigate).toHaveBeenCalledWith([
      `profile/${UserProfileMockResponse.username}/`,
    ]);
  });
});
