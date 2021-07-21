import { GitHub, Instagram, LinkedIn } from "@material-ui/icons";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #d598a0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-evenly;
`;

export const FooterText = styled.div`
  color: #ffffff;
  text-align: center;
  padding: 15px 0;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
