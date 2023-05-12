import React, { useEffect } from "react";
import white from "../../assets/piece-data/white-piece.png";
import brown from "../../assets/piece-data/brown-piece.png";
import styled from "styled-components";

function KilledPieces({
  killPileOne,
  setKillPileOne,
  revived,
  setRevived,
  clicked,
  setClicked,
  handleClick,
  turn,
  setTurn,
  killPileTwo,
  setKillPileTwo,
  setPossibleMoves,
}) {
  const handleRevive = () => {
    debugger;
    if (revived === true && !clicked) {
      setClicked(true);
      console.log("revived is true");
    } else if (revived === 1) {
      setClicked(true);
      console.log("revived is 1");
    } else {
      console.log("revived is false");
    }
    if (revived === true && clicked) {
      handleClick();
    }
  };

  const killedPieces = [];
  const killedPiecesTwo = [];

  for (let i = 0; i < killPileOne; i++) {
    killedPieces.push(
      <PileOne
        className="killed-piece white"
        src={white}
        key={i}
        alt="gammon piece"
        onClick={() => handleRevive(i)}
      ></PileOne>
    );
  }

  for (let i = 0; i < killPileTwo; i++) {
    killedPiecesTwo.push(
      <PileTwo
        className="killed-piece brown"
        src={brown}
        key={i}
        alt="gammon piece"
        onClick={() => handleRevive(i)}
      ></PileTwo>
    );
  }

  return (
    <Container className="killed-pieces-container">
      <div>{killedPieces}</div>
      <div>{killedPiecesTwo}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  top: 5%;
  left: 2%;
  width: 8%;
  height: 90%;
`;

const PileOne = styled.img`
  padding: 0px;
  width: 50px;
  height: 50px;
  margin: -5px 0px -5px 0px;
`;
const PileTwo = styled.img`
  width: 50px;
  height: 50px;
  margin: -5px 0px -5px 0px;
`;

export default KilledPieces;
