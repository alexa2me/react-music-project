import BASE_URL from "../constants/urls";
import axios from "axios";
import { goToSongsList } from "../routes/coordinator";

export const login = (body, clear, history, setAccessButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToSongsList(history);
      setAccessButton("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const signup = (body, clear, history, setAccessButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("User created successfully!");
      clear();
      setIsLoading(false);
      goToSongsList(history);
      setAccessButton("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
    });
};
