import {
  UserProfileResponse,
  UserProfilePOSTBody,
  UserProfilePATCHBody,
} from '../../shared/models/user.model';
import { ListResponse } from '../../shared/models/response.model';

export const UserProfileMockResponse: UserProfileResponse = {
  username: 'admin',
  display_name: 'very cool user',
  bio: 'hi there',
  website: 'www.www.www',
  location: 'the internet',
  birth_date: new Date(2000, 1, 1),
  followers: 5,
  following: 10,
  image_url: 'image.url/image',
};

export const ProfileListMockResponsePage1: ListResponse<UserProfileResponse> = {
  count: 2,
  next: 2,
  previous: null,
  results: [
    {
      username: 'admin',
      display_name: 'very cool user',
      bio: 'hi there',
      website: 'www.www.www',
      location: 'the internet',
      birth_date: new Date(2000, 1, 1),
      followers: 5,
      following: 10,
      image_url: 'image.url/image',
    },
    {
      username: 'someUser',
      display_name: 'somebody',
      bio: 'hello there',
      website: 'www.www.www',
      location: 'the internet',
      birth_date: new Date(1995, 1, 1),
      followers: 0,
      following: 89,
      image_url: null,
    },
  ],
};

export const ProfileListMockResponsePage2: ListResponse<UserProfileResponse> = {
  count: 2,
  next: null,
  previous: 1,
  results: [
    {
      username: 'user3',
      display_name: 'idk',
      bio: 'hi there',
      website: 'www.www.www',
      location: 'the internet',
      birth_date: new Date(2004, 1, 1),
      followers: 22,
      following: 1,
      image_url: null,
    },
    {
      username: 'user4',
      display_name: 'somebody',
      bio: 'hello there',
      website: 'www.www.www',
      location: 'the internet',
      birth_date: new Date(1960, 1, 1),
      followers: 2,
      following: 2,
      image_url: 'image.url/image1',
    },
  ],
};

export const UserProfilePOSTBodyMock: UserProfilePOSTBody = {
  username: 'coolUsername123',
  display_name: 'Me',
  password: 'SecretPassword123',
  bio: "It's me!",
  website: 'www.github.com',
  location: '',
  birth_date: new Date(2000, 1, 1),
  image: new File([''], 'name'),
};

export const UserProfilePOSTResponseMock: UserProfileResponse = {
  username: 'coolUsername123',
  display_name: 'Me',
  bio: "It's me!",
  website: 'www.github.com',
  location: '',
  birth_date: new Date(2000, 1, 1),
  followers: 0,
  following: 0,
  image_url: 'url/123',
};

export const UserProfilePATCHBodyMock: UserProfilePATCHBody = {
  username: 'coolUsername123',
  display_name: 'Me',
  password: 'SecretPassword123',
  bio: "It's me!",
  website: 'www.github.com',
  location: '',
  birth_date: new Date(2000, 1, 1),
  image: new File([''], 'name'),
};

export const UserProfilePATCHResponseMock: UserProfileResponse = {
  username: 'coolUsername123',
  display_name: 'Me',
  bio: "It's me!",
  website: 'www.github.com',
  location: '',
  birth_date: new Date(2000, 1, 1),
  image_url: '',
  followers: 5,
  following: 10,
};
