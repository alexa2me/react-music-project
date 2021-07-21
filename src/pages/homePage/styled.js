import styled from "styled-components";

export const ContainerTracks = styled.div`
  background-color: #f3e0c0;
  width: 65vw;
  height: fit-content;
  margin: 0 auto;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 10px;
  align-items: center;
  color: #d64c00;
  display: flex;
  justify-content: space-evenly;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  justify-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 15px;
  margin-bottom: 20px;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 15px;
  border-radius: 12px;
  font-weight: 500;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;

export const ContentContainer = styled.div`
  background-color: #8899aa;
  margin: auto;
  margin: 15px 20px;
  border-radius: 10px;
  padding: 2px;
  padding-bottom: 30px;
`;
