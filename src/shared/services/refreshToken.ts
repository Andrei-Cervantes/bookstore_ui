import axios from "axios";

import { ENDPOINTS } from "./endpoints";

const useRefreshToken = () => {
  const getRefreshToken = async () => {
    const response = await axios.post(ENDPOINTS.AUTH.REFRESH_TOKEN);

    return response.data;
  };

  return {
    getRefreshToken,
  };
};

export default useRefreshToken;
