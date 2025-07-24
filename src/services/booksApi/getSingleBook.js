import axios from "axios";
import { CONFIG } from "../../lib/config/config";

const getSingleBook = async (id) => {
  try {
    const response = await axios.get(`${CONFIG.API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getSingleBook;
