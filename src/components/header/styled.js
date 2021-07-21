import { Toolbar, Box, Button } from "@material-ui/core";
import styled from "styled-components";

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px 0 10px;
`;

export const StyledBox = styled(Box)`
  cursor: pointer;
`;

export const StyledButton = styled(Button)`
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const ImgLogo = styled.img`
  width: 14em;
  margin-top: 12px;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.3));
`;
