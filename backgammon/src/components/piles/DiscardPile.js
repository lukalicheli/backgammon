import React from "react";
import white from "../../assets/piece-data/white-piece.png";
import brown from "../../assets/piece-data/brown-piece.png";
import styled from "styled-components";

function DiscardPile({
  discardPileOne,
  discardPileTwo,
  setDiscardPileOne,
  setDiscardPileTwo,
  revived,
  setRevived,
  clicked,
  setClicked,
  handleClick,
  backgammon,
  turn,
}) {
  const verifyLastPieces = () => {
    const backgammonBoard = [...backgammon];
    if (turn === 0) {
      //for player 1
      for (let i = 0; i < 18; i++) {
        if (backgammonBoard[i][1] !== 0) {
        } else {
          return false;
        }
      }
    } else if (turn === 1) {
      for (let i = 6; i < 23; i++) {
        if (backgammonBoard[i][1] !== 1) {
        } else {
          return false;
        }
      }
    }
  };

  const handleDiscard = () => {
    if (turn === 0 && clicked) {
      console.log("yall");
    }

    if (turn === 1 && clicked) {
      console.log("howdy");
    }
  };

  const discardedPieces = [];
  const discardedPiecesTwo = [];

  for (let i = 0; i < discardPileOne; i++) {
    discardedPieces.push(
      <PileOne
        className="killed-piece brown"
        src={brown}
        key={i}
        alt="gammon piece"
      ></PileOne>
    );
  }

  for (let i = 0; i < discardPileTwo; i++) {
    discardedPiecesTwo.push(
      <PileTwo
        className="killed-piece white"
        src={white}
        key={i}
        alt="gammon piece"
      ></PileTwo>
    );
  }

  return (
    <Container className="discarded-pieces-container">
      <div className="discard-pile one" onClick={() => handleDiscard()}>
        {discardedPieces}
      </div>
      <div className="discard-pile two" onClick={() => handleDiscard()}>
        {discardedPiecesTwo}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: space-between;
  top: 5%;
  right: 0%;
  width: 8%;
  height: 90%;
`;

const PileOne = styled.img`
  padding: 0px;
  width: 50px;
  height: 50px;
  margin: -5px 0px -30px 0px;
`;
const PileTwo = styled.img`
  width: 50px;
  height: 50px;
  margin: -30px 0px 0px 0px;
`;

export default DiscardPile;
