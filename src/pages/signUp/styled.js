import styled from "styled-components";

export const Title = styled.p`
  font-size: 5vh;
  text-align: center;
  margin: 10px 0;
  color: #d598a0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ScreenContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 450px;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  max-width: 380px;
  align-items: center;
`;

export const SideContainer = styled.div`
  background-color: #d598a0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100vh;
`;

export const LoginButtonContainer = styled.button`
  width: 70vw;
  max-width: 380px;
  border: none;
  border-radius: 5px;
  margin-top: 6.5px;
`;
