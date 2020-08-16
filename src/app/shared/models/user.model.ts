export interface UserProfileResponse {
  username: string;
  display_name: string;
  bio: string;
  website: string;
  location: string;
  birth_date: Date;
  followers: number;
  following: number;
  is_followed: boolean;
  image_url: string | null;
}

export interface UserProfilePOSTBody {
  username: string;
  display_name: string;
  password: string;
  bio?: string;
  website?: string;
  location?: string;
  birth_date?: Date;
  image?: File;
}

export interface UserProfilePATCHBody {
  username?: string;
  display_name?: string;
  password?: string;
  bio?: string;
  website?: string;
  location?: string;
  birth_date?: Date | string;
  image?: File;
}

export interface BaseUserProfile {
  username: string;
  display_name: string;
  image_url: string;
}
