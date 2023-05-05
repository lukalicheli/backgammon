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
}) {
  const handleRevive = () => {
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

  const discardedPieces = [];
  const discardedPiecesTwo = [];

  for (let i = 0; i < discardPileOne; i++) {
    discardedPieces.push(
      <PileOne
        className="killed-piece brown"
        src={brown}
        key={i}
        alt="gammon piece"
        onClick={() => handleRevive(i)}
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
        onClick={() => handleRevive(i)}
      ></PileTwo>
    );
  }

  return (
    <Container className="discarded-pieces-container">
      <div>{discardedPieces}</div>
      <div>{discardedPiecesTwo}</div>
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
  margin: -30px 0px -5px 0px;
`;

export default DiscardPile;
