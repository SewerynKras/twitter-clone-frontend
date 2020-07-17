import {
  FollowPOSTBody,
  FollowResponse,
} from './../../shared/models/follow.model';

export const FollowPOSTBodyMock: FollowPOSTBody = {
  being_followed: 'user',
};

export const FollowResponseMock: FollowResponse = {
  created: true,
};
