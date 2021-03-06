import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePageComponent } from './profile-page.component';
import { UserProfileMockResponse } from 'src/app/core/mocks/user.mock';
import { DatePipe } from '@angular/common';

describe('ProfilePageComponent', () => {
  let component: ProfilePageComponent;
  let fixture: ComponentFixture<ProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ProfilePageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(),
            snapshot: {
              paramMap: {
                get: () => 'test124',
              },
            },
          },
        },

        DatePipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePageComponent);
    component = fixture.componentInstance;
    spyOn(component['usersService'], 'getSingleProfile').and.returnValue(
      of({ ...UserProfileMockResponse })
    );
    spyOn(component['title'], 'changeTitle');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the profile info', () => {
    const username = 'test123';
    component.getProfileFromUsername(username);
    expect(component['usersService'].getSingleProfile).toHaveBeenCalledWith({
      username: username,
    });
  });

  it('should update the title', () => {
    expect(component['title'].changeTitle).toHaveBeenCalledWith(
      {
        ...UserProfileMockResponse,
      }.display_name
    );
  });
});
