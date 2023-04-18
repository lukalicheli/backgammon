import { useState } from "react";
import "./App.css";
import brown from "./assets/piece-data/brown-piece.png";
import white from "./assets/piece-data/white-piece.png";

function App() {
  const [board, setBoard] = useState(Array(24).fill(brown));
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

  const handleClick = (e) => {
    debugger;
  };

  return (
    <div className="game-container">
      <div className="backgammon-board">
        <div className="first-quadrant">
          {backgammon.slice(0, 6).map((value, index) => {
            const pieceImage = value[1] === 0 ? white : brown;
            const pieceImages = Array.from({ length: value[0] }, (_, i) => (
              <img
                className="gammon-piece"
                key={i}
                src={pieceImage}
                alt="Piece"
              />
            ));

            return (
              <div
                key={index}
                className={`column ${value}`}
                onClick={() => handleClick(index)}
              >
                {pieceImages}
              </div>
            );
          })}
        </div>

        <div className="second-quadrant">
          {backgammon.slice(6, 13).map((value, index) => {
            const pieceImage = value[1] === 0 ? white : brown;
            const pieceImages = Array.from({ length: value[0] }, (_, i) => (
              <img
                className="gammon-piece"
                key={i}
                src={pieceImage}
                alt="Piece"
              />
            ));

            return (
              <div
                key={index}
                className={`column ${value}`}
                onClick={() => handleClick(index)}
              >
                {pieceImages}
              </div>
            );
          })}
        </div>
        <div className="third-quadrant">
          {backgammon.slice(14, 20).map((value, index) => {
            const pieceImage = value[1] === 0 ? white : brown;
            const pieceImages = Array.from({ length: value[0] }, (_, i) => (
              <img
                className="gammon-piece"
                key={i}
                src={pieceImage}
                alt="Piece"
              />
            ));

            return (
              <div
                key={index}
                className={`column ${value}`}
                onClick={() => handleClick(index)}
              >
                {pieceImages}
              </div>
            );
          })}
        </div>
        <div className="fourth-quadrant">
          {backgammon.slice(21, 27).map((value, index) => {
            const pieceImage = value[1] === 0 ? white : brown;
            const pieceImages = Array.from({ length: value[0] }, (_, i) => (
              <img
                className="gammon-piece"
                key={i}
                src={pieceImage}
                alt="Piece"
              />
            ));

            return (
              <div
                key={index}
                className={`column ${value}`}
                onClick={() => handleClick(index)}
              >
                {pieceImages}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
