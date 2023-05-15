import React from "react";
import white from "../../assets/piece-data/white-piece.png";
import brown from "../../assets/piece-data/brown-piece.png";
import styled from "styled-components";

function DiscardPile({
  discardPileOne,
  discardPileTwo,
  setDiscardPileOne,
  setDiscardPileTwo,
  clicked,
  setClicked,
  handleClick,
  backgammon,
  turn,
  pieceIndex,
  possibleMoves,
  setPossibleMoves,
  setBackgammon,
  setTurn,
  killPileOne,
  killPileTwo,
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

  const verifyDiscard = () => {
    debugger;
    //if it's black's turn
    if (turn === 1) {
      const currIndex = pieceIndex[2] + 1;
      for (let i = currIndex; i < 6; i++) {
        const element = backgammon[i][0];
        if (element !== 0) {
          console.log("can't move");
          return false;
        } else {
          console.log("you can move");
        }
      }

      //If it's white's turn
    } else if (turn === 0) {
      const currIndex = pieceIndex[2] - 1;

      for (let i = currIndex; i > 18; i--) {
        const subarray = backgammon[i][0];

        if (subarray !== 0) {
          console.log("false");
          return false;
        } else {
          console.log("true");
        }
      }
    }
  };

  const discardPiece = () => {
    const newValue = pieceIndex[0] - 1;
    const newSubArray =
      turn === 0
        ? [newValue, pieceIndex[1], pieceIndex[2], pieceIndex[3]]
        : [newValue, pieceIndex[1], pieceIndex[2]];

    //replace the values on board and updating state
    const newBoard = [...backgammon];
    newBoard.splice(pieceIndex[2], 1, newSubArray);
    setBackgammon(newBoard);

    //updating pile and the state of pile as well as clicked

    turn === 0
      ? setDiscardPileTwo(discardPileTwo + 1)
      : setDiscardPileOne(discardPileOne + 1);

    setClicked(false);

    //newValue for possibleMoves

    const move = turn === 0 ? pieceIndex[3] : pieceIndex[2] + 1;
    const updatedPossibleMoves = [...possibleMoves];
    const indexToRemove = updatedPossibleMoves.indexOf(move);
    if (indexToRemove !== -1) {
      updatedPossibleMoves.splice(indexToRemove, 1);
      setPossibleMoves(updatedPossibleMoves);
    }
  };

  const handleDiscard = () => {
    if (turn === 0 && clicked && verifyLastPieces() !== false) {
      const valueToCompare = pieceIndex[3];
      if (
        possibleMoves[0] === valueToCompare ||
        possibleMoves[1] === valueToCompare
      ) {
        //new Values for backgammon board
        discardPiece();
      } else if (verifyDiscard() !== false) {
        discardPiece();
      } else {
        console.log("handleDiscard error");
      }
    }

    if (turn === 1 && clicked && verifyLastPieces() !== false) {
      const valueToCompare = pieceIndex[2] + 1;
      if (
        possibleMoves[0] === valueToCompare ||
        possibleMoves[1] === valueToCompare
      ) {
        //new Values for backgammon board
        discardPiece();
      } else if (verifyDiscard() !== false) {
        discardPiece();
      } else {
        console.log("cant do that");
      }
    }
  };

  const maxPieces = 9;

  const discardedPieces = [];
  const discardedPiecesTwo = [];

  const discardedPieceCount =
    discardPileOne > maxPieces ? maxPieces : discardPileOne;

  const discardedPieceCountTwo =
    discardPileTwo > maxPieces ? maxPieces : discardPileTwo;

  for (let i = 0; i < discardedPieceCount; i++) {
    discardedPieces.push(
      <PileOne
        className="killed-piece brown"
        src={brown}
        key={i}
        alt="gammon piece"
      ></PileOne>
    );
  }

  for (let i = 0; i < discardedPieceCountTwo; i++) {
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
      <PileCount>{discardPileOne}</PileCount>
      <PileCount>{discardPileTwo}</PileCount>
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

const PileCount = styled.p`
  width: 50px;
  height: 20px;
  color: black;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  background-color: orangered;
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
