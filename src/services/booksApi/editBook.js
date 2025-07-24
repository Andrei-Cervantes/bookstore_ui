import axios from "axios";
import { CONFIG } from "../../lib/config/config";

const editBook = async (id, { title, author, publishYear }) => {
  try {
    const response = await axios.put(`${CONFIG.API_URL}/books/${id}`, {
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

export default editBook;
