import { UserProfileMockResponse } from './../../../../../core/mocks/user.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
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
