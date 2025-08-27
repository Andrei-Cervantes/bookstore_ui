export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  avatar: string;
  isActive: boolean;
}

export interface TokenResponse extends User {
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface CommonResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
