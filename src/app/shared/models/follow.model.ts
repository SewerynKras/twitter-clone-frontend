export interface FollowResponse {
  following: string;
  being_followed: string;
}

export interface FollowPOSTBody {
  being_followed: string;
}
