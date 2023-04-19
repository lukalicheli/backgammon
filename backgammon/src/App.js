import { useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";
import white from "./assets/piece-data/white-piece.png";

function App() {
  const [backgammon, setBackgammon] = useState([
    [2, 0, 1],
    [0, -1, 2],
    [0, -1, 3],
    [0, -1, 4],
    [0, -1, 5],
    [5, 1, 6],
    [0, -1, 7],
    [3, 1, 8],
    [0, -1, 9],
    [0, -1, 10],
    [0, -1, 11],
    [5, 0, 12],
    [5, 1, 13],
    [0, -1, 14],
    [0, -1, 15],
    [0, -1, 16],
    [3, 0, 17],
    [0, -1, 18],
    [5, 0, 19],
    [0, -1, 20],
    [0, -1, 21],
    [0, -1, 22],
    [0, -1, 23],
    [2, 1, 24],
  ]);

  const handleClick = (value, index) => {
    console.log(index);
    console.log(value);
  };

  const renderColumn = (value, index) => {
    const pieceImage = value[1] === 0 ? white : value[1] === 1 ? brown : null;
    if (value[0] === 0 && value[1] === -1) {
      // empty column
      return (
        <div
          key={index}
          className="gammon-piece empty-column"
          onClick={() => handleClick(value)}
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
    </div>
  );
}

export default App;
