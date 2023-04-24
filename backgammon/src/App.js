import { useEffect, useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";
import white from "./assets/piece-data/white-piece.png";
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
  // value = [how many pieces in each slot, 0=white piece 1=brown piece, position on board starting from 0 like an array count]

  const [clicked, setClicked] = useState(false);
  const [pieceIndex, setPieceIndex] = useState(null);
  const [code, setCode] = useState(null);

  const handleClick = (value, index) => {
    const amount = value[0];
    let i = value[2];
    if (!clicked) {
      setClicked(true);
      setPieceIndex(value);
    } else {
      const newSet = value[0] + 1;
      const oldSet = pieceIndex[0] - 1;
      const newSubarray = [newSet, pieceIndex[1], value[2]]; // the new subarray that will replace the old one
      const newSubarray2 = [oldSet, pieceIndex[1], pieceIndex[2]]; // the new subarray that will replace the old one
      const newBackgammon = backgammon.slice(); // create a copy of the state variable
      const index = newBackgammon.findIndex(
        (subArr) => subArr[2] === newSubarray2[2]
      );
      console.log(index);
      newBackgammon.splice(index, 1, newSubarray2);
      newBackgammon.splice(i, 1, newSubarray);

      setBackgammon(newBackgammon); // update the state with the new copy
      console.log(newBackgammon);

      setClicked(true);
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
              onClick={() => handleClick(value, index)}
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
      <Dice></Dice>
    </div>
  );
}

export default App;
