import React, { useState } from "react";
import Router from "./routes/Router";
import "./styles/homepage.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import Header from "./components/header/Header";
import GlobalState from "./global/GlobalState";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
