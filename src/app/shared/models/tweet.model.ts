export interface TweetResponse {
  id: string;
  author: string;
  text: string;
  created_date: Date;
  is_liked: boolean;
  is_retweeted: boolean;
  likes: number;
  comments: number;
  retweets: number;
  retweet: string;
  comment: string;
  image_url: string;
}
export interface TweetResponseRaw {
  id: string;
  author: string;
  text: string | null;
  created_date: string | Date;
  is_liked: boolean;
  is_retweeted: boolean;
  likes: number;
  comments: number;
  retweets: number;
  retweet: string | null;
  comment: string | null;
  image_url: string | null;
}

export interface TweetPOSTBody {
  text?: string;
  comment_id?: string;
  retweet_id?: string;
  image?: File;
}
