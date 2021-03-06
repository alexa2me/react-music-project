import BASE_URL from "../constants/urls";
import axios from "axios";
import { goToHomePage } from "../routes/coordinator";

export const login = (body, clear, history, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToHomePage(history);
    })
    .catch((err) => {
      setIsLoading(false);
      console.log(err.response.data.message);
    });
};

export const signup = (body, clear, history, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("User created successfully!");
      clear();
      setIsLoading(false);
      goToHomePage(history);
    })
    .catch((err) => {
      setIsLoading(false);
    });
};
