import React from "react";
import { LogoImage, ScreenContainer, Title, LogoContainer } from "./styled";
import logo from "../../assets/images/logo.png";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUp = ({ setAccessButton }) => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <SignUpForm setAccessButton={setAccessButton} />
    </ScreenContainer>
  );
};

export default SignUp;
