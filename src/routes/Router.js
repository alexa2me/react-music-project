import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import SongList from "../pages/songList/SongList";
import SignUp from "../pages/signUp/SignUp";

const Router = ({ accessButton, setAccessButton }) => {
  return (
    <Switch>
      <Route exact path="/login">
        <Login accessButton={accessButton} setAccessButton={setAccessButton} />
      </Route>

      <Route exact path="/signup">
        <SignUp accessButton={accessButton} setAccessButton={setAccessButton} />
      </Route>

      <Route exact path="/">
        <SongList />
      </Route>
    </Switch>
  );
};

export default Router;
