import { useState } from "react";
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

  const [clicked, setClicked] = useState(false);
  const [pieceIndex, setPieceIndex] = useState(null);
  const handleClick = (value, index) => {
    if (!clicked) {
      setClicked(true);
      setPieceIndex(value[2]);
    } else {
      const newIndex = value[2];
      console.log(pieceIndex);
      // const updatedBoard = backgammon.splice(index, newIndex);
      // setBackgammon(updatedBoard);
      setClicked(false);
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
