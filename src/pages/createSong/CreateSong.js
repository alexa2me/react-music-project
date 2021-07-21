import React, { useContext } from "react";
import Loading from "../../components/loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useHistory } from "react-router-dom";
import Header from "../../components/header/Header";
import AddSongForm from "../createSong/AddSongsForm";
import Footer from "../../components/footer/Footer";

const CreateSong = () => {
  useProtectedPage();
  const history = useHistory();
  const { states, requests } = useContext(GlobalStateContext);

  return (
    <div>
      <Header />
      <AddSongForm />
      <Footer />
    </div>
  );
};

export default CreateSong;
