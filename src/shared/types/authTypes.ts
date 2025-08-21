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
