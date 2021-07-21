import axios from "axios";
import BASE_URL from "../constants/urls";
import { headerApi } from "./config/headerApi";

export const createSong = async (body, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(
      `${BASE_URL}/music/create`,
      body,
      headerApi()
    );

    const { song } = response.data;

    return {
      song,
      status: true,
    };
  } catch (error) {
    setIsLoading(false);
    const { message } = error.response.data;

    return {
      message,
      status: false,
    };
  }
};
