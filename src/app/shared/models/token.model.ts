export interface TokenResponse {
  access: string;
  refresh: string;
}

export interface TokenPOSTBody {
  username: string;
  password: string;
}

export interface TokenRefreshResponse {
  access: string;
}

export interface TokenRefreshPOSTBody {
  refresh: string;
}
