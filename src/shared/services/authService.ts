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

  return {
    register,
    login,
  };
};

export default useAuthService;
