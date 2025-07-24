import axios from "axios";
import { CONFIG } from "../../lib/config/config";

const getBooks = async () => {
  try {
    const response = await axios.get(`${CONFIG.API_URL}/books`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getBooks;
