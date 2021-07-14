import React from "react";
import {
  ScreenContainer,
  SignUpButtonContainer,
  Title,
  SideContainer,
  RightSideContainer,
} from "./styled";
import logo from "../../assets/images/logo.png";
import { Button } from "@material-ui/core";
import { goToSignUp } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const Login = ({ setAccessButton }) => {
  useUnprotectedPage();
  const history = useHistory();

  return (
    <ScreenContainer>
      <RightSideContainer>
        <div>
          <Title>Login</Title>
          <LoginForm setAccessButton={setAccessButton} />
          <SignUpButtonContainer>
            <Button
              onClick={() => goToSignUp(history)}
              type={"submit"}
              variant={"text"}
              color={"primary"}
              margin={"normal"}
              fullWidth
            >
              Don't have an account? Sign up here!
            </Button>
          </SignUpButtonContainer>
        </div>
      </RightSideContainer>
      <SideContainer>
        <img src={logo} alt="logo" />
      </SideContainer>
    </ScreenContainer>
  );
};

export default Login;
