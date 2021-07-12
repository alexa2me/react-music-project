import React from "react";
import {
  LogoImage,
  ScreenContainer,
  Title,
  LogoContainer,
  SignUpButtonContainer,
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
          Não possui conta? Cadastre-se!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default Login;
