export interface TweetResponse {
  id: string;
  author: string;
  text: string | null;
  likes: number;
  comments: number;
  retweets: number;
  retweet: string | null;
  comment: string | null;
  image_url: string | null;
}

export interface TweetPOSTBody {
  text: string;
  comment_id?: string;
  retweet_id?: string;
  image?: File;
}
