import { useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";

function App() {
  const [board, setBoard] = useState(Array(24).fill(brown));

  const handleClick = (e) => {};

  return (
    <div className="game-container">
      <div className="backgammon-board">
        {board.map((value, index) => {
          return (
            <div
              key={index}
              className={`column ${value}`}
              onClick={() => handleClick(index)}
            >
              <img className="gammon-piece" src={value} alt="piece" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
