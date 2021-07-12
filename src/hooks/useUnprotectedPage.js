import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToSongsList } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToSongsList(history);
    }
  }, [history]);
};

export default useProtectedPage;
