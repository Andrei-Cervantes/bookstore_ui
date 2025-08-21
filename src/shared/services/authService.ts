import axios from "axios";

import { ENDPOINTS } from "@/shared/services/endpoints";
import type { RegisterRequest } from "@/shared/types/authTypes";

const useAuthService = () => {
  // register
  const register = async (data: RegisterRequest) => {
    const response = await axios.post(ENDPOINTS.AUTH.REGISTER, data);

    return response.data;
  };

  return {
    register,
  };
};

export default useAuthService;
