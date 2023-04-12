import "./App.css";
import board from "./assets/backgammon.jpg";

function App() {
  return (
    <div className="game-container">
      <div className="backgammon-board">
        <img className="board-image" src={board}></img>
      </div>
    </div>
  );
}

export default App;
