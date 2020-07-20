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

export interface TokenInvalidExpiredResponse {
  detail: string;
  code: string;
  messages: [
    {
      token_class: string;
      token_type: string;
      message: string;
    }
  ];
}
