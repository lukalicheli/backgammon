import { useEffect, useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";
import white from "./assets/piece-data/white-piece.png";
import { diceImages } from "./assets/dice-data/DiceImages";
import Dice from "./components/dice/Dice";

function App() {
  const [backgammon, setBackgammon] = useState([
    [2, 0, 0],
    [0, -1, 1],
    [0, -1, 2],
    [0, -1, 3],
    [0, -1, 4],
    [5, 1, 5],
    [0, -1, 6],
    [3, 1, 7],
    [0, -1, 8],
    [0, -1, 9],
    [0, -1, 10],
    [5, 0, 11],
    [5, 1, 12],
    [0, -1, 13],
    [0, -1, 14],
    [0, -1, 15],
    [3, 0, 16],
    [0, -1, 17],
    [5, 0, 18],
    [0, -1, 19],
    [0, -1, 20],
    [0, -1, 21],
    [0, -1, 22],
    [2, 1, 23],
  ]);

  const [pieceIndex, setPieceIndex] = useState(null);
  const [dice, setDice] = useState([1, 2, 3, 4, 5, 6]);
  const [firstDice, setFirstDice] = useState(null);
  const [secondDice, setSecondDice] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [turn, setTurn] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [moves, setMoves] = useState(null);

  const checkMove = (value) => {
    const difference = value[2] - pieceIndex[2];
    if (difference === possibleMoves[0] || difference === possibleMoves[1]) {
      return true;
    } else {
      return false;
    }
  };

  // value = [how many pieces in each slot, 0=white pi ece 1=brown piece, position on board starting from 0 like an array count]
  const handleClick = (value, index) => {
    debugger;
    let i = value[2];
    if (turn === 0 && (value[1] === 0 || value[1] === -1) && !clicked) {
      setPieceIndex(value);
      setClicked(true);
    } else if (turn === 0 && checkMove(value) && clicked) {
      const newSet = value[0] + 1;
      const oldSet = pieceIndex[0] - 1;
      const newSubarray = [newSet, pieceIndex[1], value[2]]; // [add one piece, make the column be equal to whatever piece is moving, at what index]
      const newSubarray2 = [
        oldSet,
        oldSet === 0 ? -1 : pieceIndex[1],
        pieceIndex[2],
      ]; //[minus one piece, make the column equal to whatever piece is moving, at what index]
      // const newBoard = [...backgammon];
      const newBoard = JSON.parse(JSON.stringify(backgammon));
      const index = value[2];
      const index2 = pieceIndex[2];
      newBoard[index] = newSubarray;
      newBoard[index2] = newSubarray2;
      const move = value[2] - pieceIndex[2];
      const updatedPossibleMoves = possibleMoves.filter(
        (element) => element !== move
      );

      setPossibleMoves(updatedPossibleMoves);
      setClicked(false);
      setBackgammon(newBoard);
    } else if (possibleMoves.length === 0) {
      console.log("no More");
      setTurn(1);
    }
  };

  const renderColumn = (value, index) => {
    const pieceImage = value[1] === 0 ? white : value[1] === 1 ? brown : null;
    if (value[0] === 0 && value[1] === -1) {
      // empty column
      return (
        <div
          key={index}
          className="gammon-piece empty-column"
          onClick={() => handleClick(value, index)}
        />
      );
    } else {
      // column with pieces
      return (
        <div className="column" key={index}>
          {[...Array(value[0])].map((_, i) => (
            <img
              key={i}
              className={`gammon-piece ${value}`}
              onClick={() => {
                handleClick(value, index);
              }}
              src={pieceImage}
              alt="piece"
            />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="game-container">
      <div className="backgammon-board">
        <div className="quadrant one">
          {backgammon.slice(6, 12).map(renderColumn)}
        </div>
        <div className="quadrant two">
          {backgammon.slice(0, 6).map(renderColumn)}
        </div>
        <div className="quadrant three">
          {backgammon.slice(12, 18).map(renderColumn)}
        </div>
        <div className="quadrant four">
          {backgammon.slice(18, 24).map(renderColumn)}
        </div>
      </div>
      <Dice
        firstDice={firstDice}
        secondDice={secondDice}
        dice={dice}
        diceImages={diceImages}
        setFirstDice={setFirstDice}
        setSecondDice={setSecondDice}
        setPossibleMoves={setPossibleMoves}
        possibleMoves={possibleMoves}
      />
    </div>
  );
}

export default App;
