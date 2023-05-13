import React from "react";
import styled from "styled-components";

function PlayerTurn({ turn }) {
  return (
    <Container>
      {turn === 1 ? (
        <Player>Brown</Player>
      ) : turn === 0 ? (
        <Player>White</Player>
      ) : (
        <Player>Roll</Player>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  top: 45%;
  left: 1%;
  width: 7%;
  font-weight: bolder;
  background-color: orangered;
`;

const Player = styled.p`
  display: flex;
  justify-content: center;
`;
export default PlayerTurn;
