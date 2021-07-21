import React from "react";
import { FooterContainer, FooterText, IconsContainer } from "./styled";
import { Instagram, GitHub, LinkedIn } from "@material-ui/icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Made with &#9829; by Alê</FooterText>
      <IconsContainer>
        <a href="https://github.com/alexa2me" target="_blank">
          <GitHub
            style={{
              color: "#ffffff",
              cursor: "pointer",
              filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.4))",
            }}
          />
        </a>
        <a href="https://www.linkedin.com/in/ale-alcantara/" target="_blank">
          <LinkedIn
            style={{
              color: "#ffffff",
              cursor: "pointer",
              filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.4))",
            }}
          />
        </a>
        <a href="https://www.instagram.com/srta.xanda/" target="_blank">
          <Instagram
            style={{
              color: "#ffffff",
              cursor: "pointer",
              filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.4))",
            }}
          />
        </a>
      </IconsContainer>
    </FooterContainer>
  );
};

export default Footer;
