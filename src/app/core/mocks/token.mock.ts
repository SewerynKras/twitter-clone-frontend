import {
  TokenResponse,
  TokenRefreshResponse,
} from '../../shared/models/token.model';

export const TokenResponseMock: TokenResponse = {
  access: '1234',
  refresh: '5678',
};

export const TokenRefreshResponseMock: TokenRefreshResponse = {
  access: '9999',
};
