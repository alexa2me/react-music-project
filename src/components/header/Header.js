import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { StyledToolbar, StyledBox, StyledButton, ImgLogo } from "./styled";
import {
  goToCreateSong,
  goToHomePage,
  goToLogin,
} from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const accessButtonAction = () => {
    if (token) {
      logout();
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <StyledBox
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ImgLogo
            src={logo}
            alt="Logo"
            onClick={() => goToHomePage(history)}
          />
        </StyledBox>

        <StyledButton onClick={() => goToHomePage(history)} color="inherit">
          Home
        </StyledButton>

        <StyledButton onClick={() => ""} color="inherit">
          Playlist
        </StyledButton>

        <StyledButton onClick={() => goToCreateSong(history)} color="inherit">
          Add song
        </StyledButton>

        <StyledButton onClick={accessButtonAction} color="inherit">
          Logout
        </StyledButton>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
