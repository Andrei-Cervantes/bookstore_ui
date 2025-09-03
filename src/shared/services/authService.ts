import axios from "axios";

import { ENDPOINTS } from "@/shared/services/endpoints";
import type {
  LoginRequest,
  RegisterRequest,
  CommonResponse,
  TokenResponse,
} from "@/shared/types/authTypes";

const useAuthService = () => {
  // register
  const register = async (data: RegisterRequest) => {
    const response = await axios.post<CommonResponse<TokenResponse>>(
      ENDPOINTS.AUTH.REGISTER,
      data
    );

    return response.data;
  };

  // login
  const login = async (data: LoginRequest) => {
    const response = await axios.post(ENDPOINTS.AUTH.LOGIN, data);

    return response.data;
  };

  // forgot password
  const forgotPassword = async (data: { email: string }) => {
    const response = await axios.post(ENDPOINTS.AUTH.FORGOT_PASSWORD, data);

    return response.data;
  };

  // resend verification email
  const resendVerificationEmail = async (data: { email: string }) => {
    const response = await axios.post(
      ENDPOINTS.AUTH.RESEND_VERIFICATION_EMAIL,
      data
    );

    return response.data;
  };

  // verify email
  const verifyEmail = async (data: { token: string }) => {
    const response = await axios.get(
      `${ENDPOINTS.AUTH.VERIFY_EMAIL}/${data.token}`
    );

    return response.data;
  };

  return {
    register,
    login,
    forgotPassword,
    resendVerificationEmail,
    verifyEmail,
  };
};

export default useAuthService;
