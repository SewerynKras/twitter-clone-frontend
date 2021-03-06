import { ListResponse } from './../../shared/models/response.model';
import {
  TweetResponse,
  TweetPOSTBody,
} from './../../shared/models/tweet.model';

export const TweetResponseMock: TweetResponse = {
  id: '11111111-1111-1111-1111-111111111111',
  author: 'someUser',
  text: 'Hello world!',
  likes: 10,
  comments: 4,
  retweets: 2,
  is_liked: false,
  is_retweeted: false,
  created_date: new Date(),
  retweet: '',
  comment: '',
  image_url: 'url.url/image',
};

export const TweetResponseMockWithComment: TweetResponse = {
  id: '11111111-1111-1111-1111-111111111111',
  author: 'someUser',
  text: 'Im a comment',
  likes: 10,
  comments: 4,
  retweets: 2,
  is_liked: false,
  is_retweeted: false,
  created_date: new Date(),
  retweet: '',
  comment: '33333333-3333-3333-3333-333333333333',
  image_url: 'url.url/image',
};

export const TweetResponseMockWithRetweet: TweetResponse = {
  id: '11111111-1111-1111-1111-111111111111',
  author: 'someUser',
  text: 'look at this cool tweet',
  likes: 10,
  comments: 4,
  is_liked: false,
  is_retweeted: false,
  created_date: new Date(),
  retweets: 2,
  retweet: '33333333-3333-3333-3333-333333333333',
  comment: '',
  image_url: 'url.url/image',
};

export const TweetResponseMockWithRetweetNoText: TweetResponse = {
  id: '11111111-1111-1111-1111-111111111111',
  author: 'someUser',
  text: null,
  likes: 10,
  comments: 4,
  is_liked: false,
  is_retweeted: false,
  created_date: new Date(),
  retweets: 2,
  retweet: '33333333-3333-3333-3333-333333333333',
  comment: '',
  image_url: null,
};

export const TweetPOSTBodyMockComment: TweetPOSTBody = {
  text: 'this is a comment',
  comment_id: '33333333-3333-3333-3333-333333333333',
  image: new File([''], 'name'),
};

export const TweetPOSTBodyMockRetweet: TweetPOSTBody = {
  text: 'this is a retweet',
  retweet_id: '33333333-3333-3333-3333-333333333333',
  image: new File([''], 'name'),
};

export const TweetPOSTBodyMockRetweetNoText: TweetPOSTBody = {
  text: null,
  retweet_id: '33333333-3333-3333-3333-333333333333',
};

export const TweetResponseListMockPage1: ListResponse<TweetResponse> = {
  count: 2,
  next: 2,
  previous: null,
  results: [TweetResponseMock, TweetResponseMockWithComment],
};

export const TweetResponseListMockPage2: ListResponse<TweetResponse> = {
  count: 2,
  next: null,
  previous: 1,
  results: [TweetResponseMock, TweetResponseMockWithComment],
};
