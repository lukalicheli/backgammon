import React, { useEffect } from "react";
import white from "../../assets/piece-data/white-piece.png";

function KilledPieces({
  backgammon,
  killPileOne,
  killPileTwo,
  setKillPileOne,
  setKillPileTwo,
  turn,
  setTurn,
  pieceIndex,
  setPieceIndex,
  setClicked,
  possibleMoves,
}) {
  const handleRevive = (i) => {
    const board = [...backgammon];
    const availableSpot = board.slice(0, 6);

    let compareDiceValues = [...possibleMoves];
  };

  const killedPieces = [];

  if (killedPieces.length > 0) {
    for (let i = 0; i < killedPieces.length; i++) {
      if (killedPieces.length === 1) {
      } else if (killedPieces.length === 2) {
        const firstIndex = killedPieces[0] - 1;
        const secondIndex = killedPieces[1] - 1;
      }
    }
  }

  for (let i = 0; i < killPileOne; i++) {
    killedPieces.push(
      <img
        className="killed-piece"
        src={white}
        key={i}
        alt="gammon piece"
        onClick={() => handleRevive(i)}
      ></img>
    );
  }

  return <div className="killed-pieces-container">{killedPieces}</div>;
}

export default KilledPieces;
