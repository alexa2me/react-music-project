import React from "react";
import {
  ScreenContainer,
  Title,
  RightSideContainer,
  SideContainer,
  LoginButtonContainer,
} from "./styled";
import logo from "../../assets/images/logo.png";
import { Button } from "@material-ui/core";
import { goToLogin } from "../../routes/coordinator";
import SignUpForm from "./SignUpForm";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUp = () => {
  useUnprotectedPage();
  const history = useHistory();

  return (
    <ScreenContainer>
      <SideContainer>
        <img src={logo} alt="logo" />
      </SideContainer>
      <RightSideContainer>
        <div>
          <Title>Create account</Title>
          <SignUpForm />
          <LoginButtonContainer>
            <Button
              onClick={() => goToLogin(history)}
              type={"submit"}
              variant={"text"}
              color={"primary"}
              margin={"normal"}
              fullWidth
            >
              Already have an account? Log in here!
            </Button>
          </LoginButtonContainer>
        </div>
      </RightSideContainer>
    </ScreenContainer>
  );
};

export default SignUp;
