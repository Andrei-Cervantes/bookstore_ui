import axios from "axios";
import { CONFIG } from "../../lib/config/config";

const createBook = async ({ title, author, publishYear }) => {
  try {
    const response = await axios.post(`${CONFIG.API_URL}/books`, {
      title,
      author,
      publishYear,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default createBook;
