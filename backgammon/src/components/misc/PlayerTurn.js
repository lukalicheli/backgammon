import React from "react";
import styled from "styled-components";

function PlayerTurn({ turn }) {
  return <Container>{turn === 1 ? <p>Brown</p> : <p>White</p>}</Container>;
}

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  top: 50%;
  right: 0%;
  width: 8%;
  height: 90%;
  color: white;
  font-weight: bolder;
`;

export default PlayerTurn;
