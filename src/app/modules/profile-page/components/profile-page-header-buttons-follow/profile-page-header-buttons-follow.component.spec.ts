import { of } from 'rxjs';
import { FollowsService } from './../../../../core/http/follow/follows.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageHeaderButtonsFollowComponent } from './profile-page-header-buttons-follow.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';

describe('ProfilePageHeaderButtonsFollowComponent', () => {
  let component: ProfilePageHeaderButtonsFollowComponent;
  let fixture: ComponentFixture<ProfilePageHeaderButtonsFollowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePageHeaderButtonsFollowComponent],
      providers: [
        {
          provide: FollowsService,
          useValue: {
            createFollow: () => {
              of(null);
            },
            deleteFollow: () => {
              of(null);
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageHeaderButtonsFollowComponent);
    component = fixture.componentInstance;
    component['user'] = { ...UserProfileMockResponse };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit when a new follow should get created', () => {
    component['user'] = { ...UserProfileMockResponse };
    component['user'].is_followed = false;
    var followers_before = component['user'].followers;

    component.buttonClicked.subscribe((val) => {
      expect(val).toEqual(true);
      expect(component['user'].is_followed).toEqual(true);
      expect(component['user'].followers).toEqual(followers_before + 1);
    });
    component.emitButtonClicked();
  });

  it('should emit when a follow should get deleted', () => {
    component['user'] = { ...UserProfileMockResponse };
    component['user'].is_followed = true;
    var followers_before = component['user'].followers;

    component.buttonClicked.subscribe((val) => {
      expect(val).toEqual(false);
      expect(component['user'].is_followed).toEqual(false);
      expect(component['user'].followers).toEqual(followers_before - 1);
    });
    component.emitButtonClicked();
  });

  it('should create a new follow object', () => {
    spyOn(component['followsService'], 'createFollow').and.returnValue(
      of(null)
    );
    spyOn(component, 'emitButtonClicked');
    spyOn(component, 'toggleControl');
    component.createFollow();
    expect(component['followsService'].createFollow).toHaveBeenCalled();
    expect(component.emitButtonClicked).toHaveBeenCalled();
    expect(component.toggleControl).toHaveBeenCalled();
  });

  it('should delete a follow object', () => {
    spyOn(component['followsService'], 'deleteFollow').and.returnValue(
      of(null)
    );
    spyOn(component, 'emitButtonClicked');
    spyOn(component, 'toggleControl');
    component.deleteFollow();
    expect(component['followsService'].deleteFollow).toHaveBeenCalled();
    expect(component.emitButtonClicked).toHaveBeenCalled();
    expect(component.toggleControl).toHaveBeenCalled();
  });

  it('should toggle the disabled state of the control', () => {
    component.controlDisabled = false;
    component.toggleControl();
    expect(component.controlDisabled).toEqual(true);
    component.toggleControl();
    expect(component.controlDisabled).toEqual(false);
  });
});
