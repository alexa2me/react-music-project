import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import HomePage from "../pages/homePage/HomePage";
import SignUp from "../pages/signUp/SignUp";
import CreateSong from "../pages/createSong/CreateSong";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/users/login">
          <Login />
        </Route>

        <Route exact path="/users/signup">
          <SignUp />
        </Route>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/createsong">
          <CreateSong />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
