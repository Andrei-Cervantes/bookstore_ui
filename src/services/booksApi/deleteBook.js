import axios from "axios";
import { CONFIG } from "../../lib/config/config";

const deleteBook = async (id) => {
  try {
    const response = await axios.delete(`${CONFIG.API_URL}/books/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default deleteBook;
