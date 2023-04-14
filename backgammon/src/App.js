import { useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";

function App() {
  const [board, setBoard] = useState(Array(24).fill(brown));
  const [backgammon, setBackgammon] = useState([
    [2, 0],
    [0, -1],
    [0, -1],
    [0, -1],
    [0, -1],
    [5, 1],
    [0, -1],
    [3, 1],
    [0, -1],
    [0, -1],
    [0, -1],
    [5, 0],
    [5, 1],
    [0, -1],
    [0, -1],
    [0, -1],
    [3, 0],
    [0, -1],
    [5, 0],
    [0, -1],
    [0, -1],
    [0, -1],
    [0, -1],
    [2, 1],
  ]);

  const handleClick = (e) => {};

  return (
    <div className="game-container">
      <div className="backgammon-board">
        {backgammon.map((value, index) => {
          return (
            <div
              key={index}
              className={`column ${value}`}
              onClick={() => handleClick(index)}
            >
              {value[0]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
