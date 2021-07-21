import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { getSongs } from "../services/getSongs";
import { getGenres } from "../services/getGenres";

const GlobalState = (props) => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (isUpdate) {
      (async () => {
        const res = await getSongs();

        if (res.status) {
          setSongs(res.songs);
        } else {
          console.log(res.message);
        }
        setIsUpdate(false);
      })();
    }
  }, [isUpdate]);

  useEffect(() => {
    if (isUpdate) {
      (async () => {
        const res = await getGenres();

        if (res.status) {
          setGenres(res.genres);
        } else {
          console.log(res.message);
        }
        setIsUpdate(false);
      })();
    }
  }, [isUpdate]);

  const states = { songs, genres, isUpdate };
  const setters = { setSongs, setGenres, setIsUpdate };
  const requests = { getSongs, getGenres };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
