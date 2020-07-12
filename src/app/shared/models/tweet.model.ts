export interface TweetResponse {
  id: string;
  author: string;
  text: string | null;
  likes: number;
  comments: number;
  retweets: number;
  retweet: number | null;
  comment: number | null;
  image_url: string | null;
}

export interface TweetPOSTBody {
  text: string;
  comment_id?: number;
  retweet_id?: number;
  image?: File;
}
