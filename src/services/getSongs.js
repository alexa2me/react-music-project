import axios from "axios";
import BASE_URL from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const getSongs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/music/`, headerApi());

    const { songs } = response.data;

    return {
      songs,
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
