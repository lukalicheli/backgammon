import React from "react";
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
}) {
  const handleRevive = (index) => {
    console.log(index);
  };
  const killedPieces = [];

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
