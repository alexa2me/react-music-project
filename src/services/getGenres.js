import axios from "axios";
import BASE_URL from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const getGenres = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/music/genres/get`,
      headerApi()
    );

    const { genres } = response.data;

    return {
      genres,
      status: true,
    };
  } catch (error) {
    const { message } = error.response.data;

    return {
      message,
      status: false,
    };
  }
};
